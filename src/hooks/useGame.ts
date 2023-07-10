import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/APIClient";
import { Game } from "../interfaces/Game";

const apiClient = new APIClient<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGame;
