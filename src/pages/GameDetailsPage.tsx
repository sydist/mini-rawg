import { Grid, GridItem, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import DetailsList from "../components/DetailsList";
import ExpandableText from "../components/ExpandableText";
import GameTrailer from "../components/GameTrailer";
import ScoreBadge from "../components/ScoreBadge";
import useGame from "../hooks/useGame";

function GameDetailsPage() {
  const { slug } = useParams();

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: game, error, isLoading } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  const description = game.description_raw.slice(
    0,
    game.description_raw.indexOf("Español")
  );
  const platforms = game.parent_platforms.map(({ platform }) => platform.name);
  const genres = game.genres.map((genre) => genre.name);
  const publishers = game.publishers?.map((publisher) => publisher.name);

  return (
    <>
      <Heading as="h1">{game.name}</Heading>
      <ExpandableText>{description}</ExpandableText>
      <Grid
        marginY={8}
        templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        gap={6}
      >
        <GridItem>
          {platforms && <DetailsList title="Platforms" items={platforms} />}
        </GridItem>
        <GridItem>
          {game.metacritic && (
            <DetailsList
              title="Metascore"
              items={[<ScoreBadge score={game.metacritic} />]}
            />
          )}
        </GridItem>
        <GridItem>
          {genres && <DetailsList title="Genres" items={genres} />}
        </GridItem>
        <GridItem>
          {publishers && <DetailsList title="Publishers" items={publishers} />}
        </GridItem>
      </Grid>
      <GameTrailer gameId={game.id} />
    </>
  );
}

export default GameDetailsPage;
