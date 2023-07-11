import {
  Badge,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Link,
} from "@chakra-ui/react";
import { Game } from "../interfaces/Game";
import PlatformIconList from "./PlatformIconList";
import getCropppedImageURL from "../services/getCroppedImageURL";
import Emoji from "./Emoji";
import { Link as RouterLink } from "react-router-dom";
import GameCardContainer from "./GameCardContainer";

interface Props {
  game: Game;
}

export default function GameCard(props: Props) {
  return (
    <Link
      as={RouterLink}
      to={"/games/" + props.game.slug}
      aria-label={props.game.name}
      textDecoration="none"
      borderRadius={6}
      outlineOffset={4}
      transition="transform 300ms ease"
      _focusVisible={{ transform: "scale(1.04)" }}
      _hover={{ transform: "scale(1.04)" }}
    >
      <GameCardContainer>
        <Card>
          <Image
            src={getCropppedImageURL(props.game.background_image)}
            alt=""
            htmlWidth={3}
            htmlHeight={2}
            height="auto"
            width="100%"
            objectFit={"cover"}
          />
          <CardBody>
            <HStack justifyContent="space-between" marginBottom={2}>
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
            <Heading fontSize="2xl">
              {props.game.name}
              <Emoji rating={props.game.rating_top} />
            </Heading>
          </CardBody>
        </Card>
      </GameCardContainer>
    </Link>
  );
}
