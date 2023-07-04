import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

export default function GameHeading(props: Props) {
  const { data: genres } = useGenres();
  const selectedGenre = genres.find(
    (genre) => genre.id === props.gameQuery.genreId
  );

  const { data: platforms } = usePlatforms();
  const selectedPlatform = platforms.find(
    (platform) => platform.id === props.gameQuery.platformId
  );

  return (
    <Heading as="h1" fontSize="5xl" marginBottom={5}>
      {selectedPlatform?.name} {selectedGenre?.name} Games
    </Heading>
  );
}
