import { useQuery } from "@tanstack/react-query";
import parent_platforms from "../data/parent_platforms";
import APIClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export default () =>
  useQuery<Platform[], Error>({
    queryKey: ["platforms"],
    queryFn: () => apiClient.getAll(),
    staleTime: Infinity,
    initialData: parent_platforms,
  });