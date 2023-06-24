import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";
import { AxiosError } from "axios";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Game[];
}

export default function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((response) => setGames(response.data.results))
      .catch((error: AxiosError) => setError(error.message));
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}
