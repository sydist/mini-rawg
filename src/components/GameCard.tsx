import {
  Badge,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
} from "@chakra-ui/react";
import { Game } from "../interfaces/Game";
import PlatformIconList from "./PlatformIconList";
import getCropppedImageURL from "../services/getCroppedImageURL";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

export default function GameCard(props: Props) {
  return (
    <Link to={"/games/" + props.game.slug} aria-label={props.game.name}>
      <Card>
        <Image src={getCropppedImageURL(props.game.background_image)} />
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
    </Link>
  );
}
