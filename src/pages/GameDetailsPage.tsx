import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "../components/ExpandableText";

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

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{description}</ExpandableText>
    </>
  );
}

export default GameDetailsPage;
