import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/APIClient";
import Screenshot from "../interfaces/Screenshot";

const useScreenshots = (id: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${id}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", id],
    queryFn: () => apiClient.getAll(),
  });
};

export default useScreenshots;
