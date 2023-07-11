import {
  Card,
  CardBody,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";

export default function GameCardSkeleton() {
  return (
    <GameCardContainer>
      <Card>
        <Skeleton height={162} />
        <CardBody>
          <HStack spacing={2} marginTop={2}>
            <SkeletonCircle boxSize={4} />
            <SkeletonCircle boxSize={4} />
            <SkeletonCircle boxSize={4} />
          </HStack>
          <SkeletonText marginTop={4} />
          <SkeletonCircle marginTop={6} boxSize={6} />
        </CardBody>
      </Card>
    </GameCardContainer>
  );
}
