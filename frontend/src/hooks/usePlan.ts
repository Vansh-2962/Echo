import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export async function usePlan() {
  const { data } = useQuery({
    queryKey: ["plan"],
    queryFn: async () => {
      const res = await axiosInstance.get("/api/v1/plan");
      return res.data;
    },
  });
}
