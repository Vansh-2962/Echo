import type { Request, Response } from "express";
import got, { type Method } from "got";
import { prisma } from "../lib/prisma.js";
import type { AuthType, BodyType } from "../../generated/prisma/enums.js";

const methods: Record<string, string> = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
  PATCH: "patch",
  HEAD: "head",
  OPTIONS: "options",
};

const bodyTypeEnum: Record<string, string> = {
  none: "NONE",
  json: "JSON",
  "form-data": "FORMDATA",
  "x-www-form-urlencoded": "URLENCODED",
};

const authTypeEnum: Record<string, string> = {
  none: "NONE",
  bearer: "BEARER",
  basic: "BASIC",
  "api-key": "API_KEY",
};

export async function createCollection(req: Request, res: Response) {
  try {
    const { name } = req.body;
    const user = req.user;

    if (!user) {
      return res
        .status(401)
        .json({ success: false, msg: "User is not authenticated" });
    }

    // save collection in db
    const collection = await prisma.collections.create({
      data: {
        name: name,
        userId: user?.id,
      },
    });
    if (collection) {
      return res.status(200).json({ success: true, collection });
    }
    return res.status(400).json({ success: false });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
}

export async function getAllCollections(req: Request, res: Response) {
  try {
    // return res.status(400).json({ success: false });
    const user = req.user;
    if (!user) {
      return res
        .status(401)
        .json({ success: false, msg: "User is not authenticated" });
    }

    const collections = await prisma.collections.findMany({
      where: {
        userId: user.id,
      },
      include: {
        requests: {
          include: {
            params: true,
            headers: true,
            bodyFields: true,
            auth: true,
          },
        },
      },
    });

    return res.status(200).json({ success: true, collections });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
}

export async function createRequest(req: Request, res: Response) {
  try {
    const data = req.body;
    const method = methods[data.method] as Method;
    const params = data.params;
    const headers = data.headers;
    const url: string = data.url;
    const authType = data.authType;

    const queryParams: any = {};
    if (Array.isArray(params) && params.length > 0) {
      params.forEach((p: any) => {
        if (p.enabled && p.key) {
          queryParams[p.key] = p.value;
        }
      });
    }

    const cleanHeaders: Record<string, string> = {};
    if (Array.isArray(headers) && headers.length > 0) {
      headers.forEach((h: any) => {
        if (h.enabled && h.key) {
          queryParams[h.key] = h.value;
        }
      });
    }

    let requestBody = undefined;
    if (method !== "get" && method !== "head") {
      if (authType === "json") {
        try {
          requestBody = JSON.parse(data.bodyContent);
        } catch (error) {
          return res.status(400).json({ msg: "Invalid JSON body" });
        }
      }

      if (authType === "form-data") {
        requestBody = {};
        data.bodyFormData.forEach((b: any) => {
          if (b.enabled && b.key) {
            requestBody[b.key] = b.value;
          }
        });
      }
    }

    if (authType === "bearer" && data.authConfig?.token) {
      cleanHeaders["Authorization"] = `Bearer ${data.authConfig.token}`;
    }

    if (authType === "basic") {
      const { username, password } = data.authConfig || {};

      if (username && password) {
        const encoded = Buffer.from(`${username}:${password}`).toString(
          "base64",
        );
        cleanHeaders["Authorization"] = `Basic ${encoded}`;
      }
    }

    if (authType === "api-key") {
      const { addTo, keyName, keyValue } = data.authConfig || {};

      if (keyName && keyValue) {
        if (addTo === "header") {
          cleanHeaders[keyName] = keyValue;
        }

        if (addTo === "query") {
          queryParams[keyName] = keyValue;
        }
      }
    }

    const start = process.hrtime.bigint();
    const apiResponse = await got(url, {
      method: method.toUpperCase() as Method,
      searchParams: queryParams,
      headers: cleanHeaders,
      json: requestBody,
      throwHttpErrors: false,
      responseType: "json",
    });
    const end = process.hrtime.bigint();

    // total time
    const time = Number(end - start) / 1_000_000;

    // response size
    const headersSize = Buffer.byteLength(JSON.stringify(apiResponse.headers));

    const bodySize = Buffer.byteLength(
      typeof apiResponse.body === "string"
        ? apiResponse.body
        : JSON.stringify(apiResponse.body),
    );

    const size = headersSize + bodySize;
    const sizeInKb = (size / 1024).toFixed(2);
    const headersSizeInKb = (headersSize / 1024).toFixed(2);
    const bodySIzeInKb = (bodySize / 1024).toFixed(2);

    // final response object
    const result = {
      request: {
        method,
        url,
        headers: cleanHeaders,
      },
      response: {
        status: apiResponse.statusCode,
        statusText: apiResponse.statusMessage,
        headers: apiResponse.headers,
        body: apiResponse.body,
        time: {
          dns: apiResponse.timings.phases.dns,
          tcp: apiResponse.timings.phases.tcp,
          tls: apiResponse.timings.phases.tls,
          request: apiResponse.timings.phases.request,
          ttfb: apiResponse.timings.phases.firstByte,
          download: apiResponse.timings.phases.download,
          total: apiResponse.timings.phases.total,
        },
        size: {
          raw: size,
          formatted: sizeInKb,
          breakdown: {
            headersSize: headersSizeInKb,
            bodySize: bodySIzeInKb,
          },
        },
      },
    };

    return res.status(200).json({ success: true, result });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
}

export async function saveRequest(req: Request, res: Response) {
  try {
    const data = req.body;
    const id = req.params.id && +req.params.id;
    const user = req.user;

    const {
      method,
      url,
      params,
      headers,
      bodyType,
      bodyContent,
      bodyFormData,
      authType,
      authConfig,
      preRequestScript,
      postResponseScript,
    } = data.request;
    const bType = bodyTypeEnum[bodyType];
    const aType = authTypeEnum[authType];

    // fetch the collection from the database
    const collection = await prisma.collections.findFirst({
      where: {
        id: id as number,
      },
    });

    if (!collection) {
      return res
        .status(200)
        .json({ success: false, msg: "Collection not found" });
    }

    const result = await prisma.$transaction(async (tx) => {
      const request = await tx.requests.create({
        data: {
          name: data.name,
          method,
          url,

          params: {
            create: params
              .filter((p: any) => p.key && p.key.trim() !== "" && p.enabled)
              .map((p: any) => ({
                key: p.key,
                value: p.value,
                description: p.description,
                enabled: p.enabled,
                type: "params",
              })),
          },

          headers: {
            create: headers
              .filter((h: any) => h.key && h.key.trim() !== "" && h.enabled)
              .map((h: any) => ({
                key: h.key,
                value: h.value,
                description: h.description,
                enabled: h.enabled,
                type: "headers",
              })),
          },

          bodyType: bType as BodyType,
          rawBody: bodyContent,

          bodyFields: {
            create: bodyFormData
              .filter((bd: any) => bd.key && bd.key.trim() !== "" && bd.enabled)
              .map((bd: any) => ({
                key: bd.key,
                value: bd.value,
                description: bd.description,
                enabled: bd.enabled,
                type: "text",
              })),
          },

          authType: aType as AuthType,
          auth: {
            create: {
              token: authConfig.token,
              type: aType as AuthType,
              username: authConfig.username,
              password: authConfig.password,
              key: authConfig.keyName,
              value: authConfig.keyValue,
              addTo: authConfig.addTo || "headers",
            },
          },

          scripts: `${preRequestScript}-${postResponseScript}`,
          userId: user?.id,
          collectionId: id as number,
        },
      });

      // 👉 Conditionally create response
      if (data.request?.response) {
        await tx.response.create({
          data: {
            requestId: request.id,
            statusCode: data.request.response.response.status,
            statusText: data.request.response.response.statusText,
            responseTime: data.request.response.response.time.total,
            size: data.request.response.response.size.raw,
            timeline: data.request.response.response.time,
            breakdown: data.request.response.response.size.breakdown,
            headers: data.request.response.response.headers,
            body: data.request.response.response.body,
            cookies: data.request.response.response.cookies,
          },
        });
      }

      return request;
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, msg: "Internal Server Error" });
  }
}

export async function deleteRequest(req: Request, res: Response) {
  try {
    const collid = +req.params.collid!;
    const rid = +req.params.rid!;

    const request = await prisma.requests.delete({
      where: {
        id: rid,
        collectionId: collid,
      },
    });

    if (request.id) {
      return res.status(200).json({ success: true, msg: "Deleted" });
    }
    return res
      .status(400)
      .json({ success: false, msg: "Failed to delete! Request not found" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, msg: "Internal Server Error" });
  }
}

export async function deleteCollection(req: Request, res: Response) {
  try {
    const collid = +req.params.id!;

    const collection = await prisma.collections.delete({
      where: {
        id: collid,
      },
    });

    if (collection.id) {
      return res.status(200).json({ success: true, msg: "Deleted" });
    }
    return res
      .status(400)
      .json({ success: false, msg: "Failed to delete! Collection not found" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, msg: "Internal Server Error" });
  }
}
