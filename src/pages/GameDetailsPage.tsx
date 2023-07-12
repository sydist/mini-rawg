import { Box, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameScreenshots from "../components/GameScreenshots";
import useGame from "../hooks/useGame";

function GameDetailsPage() {
  const { slug } = useParams();

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) return null;

  const description = game.description_raw.slice(
    0,
    game.description_raw.indexOf("Español")
  );

  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} gap={16} alignItems={"start"}>
      <Box>
        <Heading as="h1" fontSize="5xl" marginBottom={2}>
          {game.name}
        </Heading>
        <Box maxWidth={"80ch"}>
          <ExpandableText>{description}</ExpandableText>
        </Box>
        <Box marginTop={16}>
          <GameAttributes game={game} />
        </Box>
      </Box>
      <Box justifySelf={"center"} alignSelf={"center"}>
        <GameScreenshots gameId={game.id} />
      </Box>
    </SimpleGrid>
  );
}

export default GameDetailsPage;
