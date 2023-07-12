import { Box, SimpleGrid } from "@chakra-ui/react";
import { Game } from "../interfaces/Game";
import DetailsList from "./DetailsList";
import ScoreBadge from "./ScoreBadge";

interface Props {
  game: Game;
}

function GameAttributes({ game }: Props) {
  const platforms = game.parent_platforms.map(({ platform }) => platform.name);
  const genres = game.genres.map((genre) => genre.name);
  const publishers = game.publishers?.map((publisher) => publisher.name);

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} maxWidth={"80ch"}>
      <Box>
        {platforms && <DetailsList title="Platforms" items={platforms} />}
      </Box>
      <Box>
        {game.metacritic && (
          <DetailsList
            title="Metascore"
            items={[<ScoreBadge score={game.metacritic} />]}
          />
        )}
      </Box>
      <Box>{genres && <DetailsList title="Genres" items={genres} />}</Box>
      <Box>
        {publishers && <DetailsList title="Publishers" items={publishers} />}
      </Box>
    </SimpleGrid>
  );
}

export default GameAttributes;
