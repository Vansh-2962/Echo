import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export function usePlan() {
  const { data, isLoading } = useQuery({
    queryKey: ["plan"],
    queryFn: async () => {
      const res = await axiosInstance.get("/api/v1/plan");
      return res.data;
    },
  });
  return { plan: data, isLoading };
}
