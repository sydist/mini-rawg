import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../store";

export default function GameHeading() {
  const [platformId, genreId] = useGameQueryStore((s) => [
    s.gameQuery.platformId,
    s.gameQuery.genreId,
  ]);

  const selectedGenre = useGenre(genreId);
  const selectedPlatform = usePlatform(platformId);

  return (
    <Heading as="h1" fontSize="5xl" marginBottom={5}>
      {selectedPlatform?.name} {selectedGenre?.name} Games
    </Heading>
  );
}
