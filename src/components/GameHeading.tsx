import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}

export default function GameHeading(props: Props) {
  const selectedGenre = useGenre(props.gameQuery.genreId);
  const selectedPlatform = usePlatform(props.gameQuery.platformId);

  return (
    <Heading as="h1" fontSize="5xl" marginBottom={5}>
      {selectedPlatform?.name} {selectedGenre?.name} Games
    </Heading>
  );
}
