import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>("/genres");

export default () =>
  useQuery<Genre[], Error>({
    queryKey: ["genres"],
    queryFn: () => apiClient.getAll(),
    staleTime: Infinity,
    initialData: genres,
  });
