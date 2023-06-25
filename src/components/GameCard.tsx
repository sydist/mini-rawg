import {
  Badge,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = (props: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={props.game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{props.game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={props.game.parent_platforms.map((p) => p.platform)}
          />
          <Badge
            paddingX={2}
            borderRadius={7}
            colorScheme={
              props.game.metacritic > 75
                ? "green"
                : props.game.metacritic > 50
                ? "yellow"
                : ""
            }
          >
            {props.game.metacritic}
          </Badge>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
