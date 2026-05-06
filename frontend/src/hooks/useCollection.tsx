import { axiosInstance } from "@/lib/axios";
import { RequestTab, useRequestStore } from "@/store/use-request-store";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "./use-toast";

export function useCollection() {
  const { deleteRequest, tabs, sendRequest } = useRequestStore();
  const client = useQueryClient();

  const getAllCollections = useQuery({
    queryKey: ["collections"],
    queryFn: async () => {
      const res = await axiosInstance.get("/api/v1/collection");

      if (!res.data?.success) return [];

      return res.data.collections.map(
        (coll: { id: number; name: string; requests?: any[] }) => ({
          id: coll.id,
          name: coll.name,
          color: ["#22c55e", "#3b82f6", "#f59e0b", "#ef4444", "#a855f7"][
            Math.floor(Math.random() * 5)
          ],
          requests: coll.requests || [],
          isExpanded: true,
        }),
      );
    },
  });

  const getHistories = useQuery({
    queryKey: ["histories"],
    queryFn: async () => {
      const res = await axiosInstance.get("/api/v1/collection/history");
      return res.data || [];
    },
  });

  const sendRequestMutation = useMutation({
    mutationFn: async (id: string) => {
      const tab = tabs.find((t) => t.id === id);
      const res = await axiosInstance.post("/api/v1/proxy", tab);
      if (res.data?.success) {
        sendRequest(id, res.data?.result);
      }
      return res.data;
    },
    onSuccess: (data) => {
      client.invalidateQueries({ queryKey: ["histories"] });
    },
    onError: (err) => {
      toast({
        title: "Error",
        description: err.response.data?.msg,
      });
    },
  });

  const deleteHistoryMutation = useMutation({
    mutationFn: async () => {
      const res = await axiosInstance.delete("/api/v1/collection/history");
      return res.data;
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["histories"] });
    },
  });

  const createCollection = useMutation({
    mutationFn: async (name: string) => {
      const res = await axiosInstance.post("/api/v1/collection", { name });
      return res.data;
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["collections"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to create collection",
      });
    },
  });

  const saveRequestInColllection = useMutation({
    mutationFn: async ({
      id,
      request,
      name,
    }: {
      id: number;
      request: RequestTab;
      name: string;
    }) => {
      const res = await axiosInstance.post(`/api/v1/collection/save/${id}`, {
        request,
        name,
      });
      return res.data;
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["collections"] });
    },
  });

  const deleteRequestMutation = useMutation({
    mutationFn: async ({
      collId,
      reqId,
    }: {
      collId: number;
      reqId: number;
    }) => {
      const res = await axiosInstance.delete(
        `/api/v1/collection/${collId}/request/${reqId}`,
      );
      if (res.data?.success) {
        deleteRequest(collId, reqId);
      }
      return res.data;
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["collections"] });
    },
  });

  const deleteCollectionMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await axiosInstance.delete(`/api/v1/collection/${id}`);
      return res.data;
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["collections"] });
    },
  });

  const renameRequestMutation = useMutation({
    mutationFn: async ({ id, name }: { id: number; name: string }) => {
      const res = await axiosInstance.put(`/api/v1/collection/request/${id}`, {
        name,
      });
      return res.data;
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["collections"] });
    },
  });

  return {
    createCollection,
    getAllCollections,
    getHistories,
    deleteHistoryMutation,
    deleteCollectionMutation,
    saveRequestInColllection,
    deleteRequestMutation,
    renameRequestMutation,
    sendRequestMutation,
  };
}
