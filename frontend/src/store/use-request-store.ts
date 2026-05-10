import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { AxiosResponse } from "axios";
import { useQueryClient } from "@tanstack/react-query";

export type HttpMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "DELETE"
  | "PATCH"
  | "HEAD"
  | "OPTIONS";

export interface KeyValuePair {
  id: string;
  key: string;
  value: string;
  description?: string;
  enabled: boolean;
}

export interface RequestTab {
  id: string;
  name: string;
  method: HttpMethod;
  url: string;
  params: KeyValuePair[];
  headers: KeyValuePair[];
  bodyType: "none" | "json" | "form-data" | "x-www-form-urlencoded";
  bodyContent: string;
  bodyFormData: KeyValuePair[];
  authType: "none" | "bearer" | "basic" | "api-key";
  authConfig: Record<string, string>;
  preRequestScript: string;
  postResponseScript: string;
  response: ResponseData | null;
  isLoading: boolean;
}

export interface ResponseData {
  status: number;
  statusText: string;
  time: number;
  size: number;
  body: string;
  response: any;
  headers: { key: string; value: string }[];
  cookies: {
    name: string;
    value: string;
    domain: string;
    path: string;
    expires: string;
  }[];
  timing: { dns: number; tcp: number; ttfb: number; download: number };
}

export interface Collection {
  id: string | number;
  name: string;
  color?: string;
  requests?: SavedRequest[];
  isExpanded: boolean;
}

export interface SavedRequest {
  id: string;
  name: string;
  method: HttpMethod;
  headers?: KeyValuePair[];
  params?: KeyValuePair[];
  authType?: string;
  auth?: any;
  bodyFields?: KeyValuePair[];
  rawBody?: string;
  bodyType?: string;
  scripts?: string;
  response?: any;
  url: string;
  tab: Omit<RequestTab, "id" | "response" | "isLoading">;
}

export interface HistoryItem {
  id: string;
  method: HttpMethod;
  response?: any;
  headers?: KeyValuePair[];
  params?: KeyValuePair[];
  authType?: string;
  auth?: any;
  bodyFields?: KeyValuePair[];
  rawBody?: string;
  bodyType?: string;
  scripts?: string;
  url: string;
  timestamp: number;
  tab: Omit<RequestTab, "id" | "response" | "isLoading">;
}

export interface Environment {
  id: string;
  name: string;
  variables: EnvVariable[];
}

export interface EnvVariable {
  id: string;
  key: string;
  initialValue: string;
  currentValue: string;
  isSecret: boolean;
}

const uid = () => Math.random().toString(36).slice(2, 10);

const createEmptyTab = (): RequestTab => ({
  id: uid(),
  name: "New Request",
  method: "GET",
  url: "",
  params: [{ id: uid(), key: "", value: "", description: "", enabled: true }],
  headers: [
    {
      id: uid(),
      key: "Content-Type",
      value: "application/json",
      description: "",
      enabled: true,
    },
    { id: uid(), key: "", value: "", description: "", enabled: true },
  ],
  bodyType: "none",
  bodyContent: "{\n  \n}",
  bodyFormData: [
    { id: uid(), key: "", value: "", description: "", enabled: true },
  ],
  authType: "none",
  authConfig: {},
  preRequestScript:
    '// Pre-request script\n// e.g. pm.environment.set("token", "abc123");',
  postResponseScript:
    '// Post-response script\n// e.g. pm.test("Status is 200", () => pm.response.to.have.status(200));',
  response: null,
  isLoading: false,
});

const initialTab = createEmptyTab();

initialTab.url = "https://dummyjson.com/recipes";
initialTab.name = "Untitled request";

interface RequestStore {
  tabs: RequestTab[];
  isLoading: boolean;
  activeTabId: string;
  collections: Collection[];
  history: HistoryItem[];
  environments: Environment[];
  activeEnvironmentId: string | null;
  sidebarOpen: boolean;
  sidebarTab: "collections" | "history";
  upgradeModal: { open: boolean; limitType: "collections" | "requests" };
  fontSize: number;
  fontFamily: string;
  lineNumber: boolean;
  minimap: boolean;

  setFontSize: (size: number) => void;
  setFontFamily: (font: string) => void;
  setLineNumber: (val: boolean) => void;
  setMinimap: (val: boolean) => void;
  addTab: () => void;
  closeTab: (id: string) => void;
  setActiveTab: (id: string) => void;
  updateTab: (id: string, updates: Partial<RequestTab>) => void;
  sendRequest: (id: string, response: any) => void;
  setIsLoading: (val: boolean) => void;

  addCollection: (name: string, id: number, requests: any[]) => void;
  toggleCollection: (id: number) => void;
  deleteCollection: (id: string) => void;
  saveRequest: (collectionId: number, name: any) => void;
  loadRequest: (request: SavedRequest | HistoryItem) => void;
  deleteRequest: (collectionId: number, requestId: number) => void;

  clearHistory: () => void;

  addEnvironment: (name: string) => void;
  updateEnvironment: (id: string, variables: EnvVariable[]) => void;
  setActiveEnvironment: (id: string | null) => void;
  deleteEnvironment: (id: string) => void;

  setSidebarOpen: (open: boolean) => void;
  setSidebarTab: (tab: "collections" | "history") => void;
  setUpgradeModal: (modal: {
    open: boolean;
    limitType: "collections" | "requests";
  }) => void;
}

const bodyTypeEnum: Record<string, string> = {
  NONE: "none",
  JSON: "json",
  FORMDATA: "form-data",
  URLENCODED: "x-www-form-urlencoded",
};

const authTypeEnum: Record<string, string> = {
  NONE: "none",
  BEARER: "bearer",
  BASIC: "basic",
  API_KEY: "api-key",
};

export const useRequestStore = create<RequestStore>((set, get) => ({
  tabs: [initialTab],
  isLoading: false,
  activeTabId: initialTab.id,
  upgradeModal: { open: false, limitType: "collections" as const },
  collections: [],

  fontSize: 12,
  setFontSize: (size: number) => set({ fontSize: size }),

  fontFamily: "Fira Code, monospace",
  setFontFamily: (font: string) => set({ fontFamily: font }),

  lineNumber: false,
  setLineNumber: (val: boolean) => set({ lineNumber: val }),

  minimap: false,
  setMinimap: (val: boolean) => set({ minimap: val }),

  history: [
    {
      id: uid(),
      method: "GET",
      url: "https://dummyjson.com/recipes",
      timestamp: Date.now() - 120000,
      tab: { ...initialTab },
    },
    {
      id: uid(),
      method: "POST",
      url: "https://dummyjson.com/recipes",
      timestamp: Date.now() - 300000,
      tab: { ...initialTab, method: "POST" },
    },
    {
      id: uid(),
      method: "DELETE",
      url: "https://dummyjson.com/recipes/3",
      timestamp: Date.now() - 3600000,
      tab: { ...initialTab, method: "DELETE" },
    },
  ],

  environments: [
    {
      id: uid(),
      name: "Development",
      variables: [
        {
          id: uid(),
          key: "baseUrl",
          initialValue: "http://localhost:3000",
          currentValue: "http://localhost:3000",
          isSecret: false,
        },
        {
          id: uid(),
          key: "apiKey",
          initialValue: "",
          currentValue: "dev_key_123",
          isSecret: true,
        },
      ],
    },
    {
      id: uid(),
      name: "Production",
      variables: [
        {
          id: uid(),
          key: "baseUrl",
          initialValue: "https://api.example.com",
          currentValue: "https://api.example.com",
          isSecret: false,
        },
        {
          id: uid(),
          key: "apiKey",
          initialValue: "",
          currentValue: "",
          isSecret: true,
        },
      ],
    },
  ],

  activeEnvironmentId: null,
  sidebarOpen: true,
  sidebarTab: "collections",

  addTab: () => {
    const tab = createEmptyTab();
    set((s) => ({ tabs: [...s.tabs, tab], activeTabId: tab.id }));
  },

  setIsLoading: (val: boolean) => set({ isLoading: val }),

  closeTab: (id) =>
    set((s) => {
      const tabs = s.tabs.filter((t) => t.id !== id);
      if (tabs.length === 0) {
        const newTab = createEmptyTab();
        return { tabs: [newTab], activeTabId: newTab.id };
      }
      const activeTabId =
        s.activeTabId === id
          ? tabs[Math.max(0, tabs.length - 1)].id
          : s.activeTabId;
      return { tabs, activeTabId };
    }),

  setActiveTab: (id) => set({ activeTabId: id }),

  updateTab: (id, updates) =>
    set((s) => ({
      tabs: s.tabs.map((t) => (t.id === id ? { ...t, ...updates } : t)),
    })),

  sendRequest: async (id, response: any) => {
    set((s) => ({
      tabs: s.tabs.map((t) =>
        t.id === id ? { ...t, isLoading: false, response: response } : t,
      ),
    }));
  },

  addCollection: (name: string, id: number, requests: any) =>
    set((s) => ({
      collections: [
        ...s.collections,
        {
          id: id,
          name,
          color: ["#22c55e", "#3b82f6", "#f59e0b", "#ef4444", "#a855f7"][
            Math.floor(Math.random() * 5)
          ],
          requests: requests,
          isExpanded: true,
        },
      ],
    })),

  toggleCollection: (id) =>
    set((s) => ({
      collections: s.collections.map((c) =>
        c.id === id ? { ...c, isExpanded: !c.isExpanded } : c,
      ),
    })),

  deleteCollection: (id) =>
    set((s) => ({ collections: s.collections.filter((c) => c.id !== id) })),

  saveRequest: (collectionId, requests) => {
    if (!collectionId) return;
    set((s) => ({
      collections: s.collections.map((c) =>
        c.id === collectionId
          ? {
              ...c,
              requests: [...c.requests],
            }
          : c,
      ),
    }));
  },

  loadRequest: (request) => {
    const tab = createEmptyTab();

    Object.assign(tab, {
      ...request.tab,
      id: request.id,
      response: {
        response: request.response[0],
      },
      headers: request.headers,
      params: request.params,
      authType: authTypeEnum[request.authType],
      authConfig: request.auth,
      bodyFormData: request.bodyFields,
      bodyContent: request.rawBody,
      bodyType: bodyTypeEnum[request.bodyType],
      preRequestScript: request.scripts,
      postResponseScript: request.scripts,
      url: request.url,
      method: request.method,
      isLoading: false,
      name: "name" in request ? request.name : request.url,
    });
    set((s) => ({ tabs: [...s.tabs, tab], activeTabId: tab.id }));
  },

  deleteRequest: (collectionId, requestId) =>
    set((s) => ({
      collections: s.collections.map((c) =>
        c.id === collectionId
          ? { ...c, requests: c.requests.filter((r) => +r.id !== requestId) }
          : c,
      ),
    })),

  clearHistory: () => set({ history: [] }),

  addEnvironment: (name) =>
    set((s) => ({
      environments: [
        ...s.environments,
        {
          id: uid(),
          name,
          variables: [
            {
              id: uid(),
              key: "",
              initialValue: "",
              currentValue: "",
              isSecret: false,
            },
          ],
        },
      ],
    })),
  updateEnvironment: (id, variables) =>
    set((s) => ({
      environments: s.environments.map((e) =>
        e.id === id ? { ...e, variables } : e,
      ),
    })),
  setActiveEnvironment: (id) => set({ activeEnvironmentId: id }),
  deleteEnvironment: (id) =>
    set((s) => ({
      environments: s.environments.filter((e) => e.id !== id),
      activeEnvironmentId:
        s.activeEnvironmentId === id ? null : s.activeEnvironmentId,
    })),

  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  setSidebarTab: (tab) => set({ sidebarTab: tab }),
  setUpgradeModal: (modal) => set({ upgradeModal: modal }),
}));
