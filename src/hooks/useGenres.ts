import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/APIClient";
import { Genre } from "../interfaces/Genre";

const apiClient = new APIClient<Genre>("/genres");

export default () =>
  useQuery<Genre[], Error>({
    queryKey: ["genres"],
    queryFn: () => apiClient.getAll(),
    staleTime: Infinity,
    initialData: genres,
  });
