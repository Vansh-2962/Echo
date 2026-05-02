import type { Request, Response } from "express";
export declare function createCollection(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getAllCollections(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function createRequest(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function saveRequest(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function deleteRequest(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function deleteCollection(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function renameRequest(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getHistory(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function deleteHistory(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=proxy.controller.d.ts.map