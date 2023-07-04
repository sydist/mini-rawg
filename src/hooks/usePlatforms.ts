import { useQuery } from "@tanstack/react-query";
import parent_platforms from "../data/parent_platforms";
import apiClient from "../services/api-client";
import { FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export default () =>
  useQuery<Platform[], Error>({
    queryKey: ["parent_platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data.results),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: parent_platforms,
  });
