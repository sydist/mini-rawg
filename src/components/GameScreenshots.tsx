import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gameId: number;
}

function GameScreenshots({ gameId }: Props) {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (!data || error || isLoading) return null;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={2} maxWidth={550}>
      {data.map(({ id, image }) => (
        <Image
          key={id}
          src={image}
          htmlWidth={57}
          htmlHeight={32}
          width={"100%"}
          height={"auto"}
          display={"block"}
        />
      ))}
    </SimpleGrid>
  );
}

export default GameScreenshots;
