import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Platform } from "./usePlatforms";
import useGameQueryStore from "../store";

export interface Game {
  background_image: string;
  description_raw: string;
  id: number;
  metacritic: number;
  name: string;
  parent_platforms: { platform: Platform }[];
  rating_top: number;
  slug: string;
}

const apiClient = new APIClient<Game>("/games");
export const PAGE_SIZE = 24;

export default () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery<Game[], Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sort,
          search: gameQuery.searchText,
          page: pageParam,
          page_size: PAGE_SIZE,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === PAGE_SIZE ? allPages.length + 1 : undefined;
    },
    staleTime: 60 * 60 * 1000,
  });
};
