import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import React from "react";

interface Props {
  gameQuery: GameQuery;
}

export default function GameGrid(props: Props) {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(props.gameQuery);

  if (error) return <Text color="red">{error.message}</Text>;

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4, "2xl": 6 }}
        spacing={6}
      >
        {isLoading &&
          [...Array(12).keys()].map((x) => (
            <GameCardContainer key={x}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages?.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          marginY={5}
        >
          {isFetchingNextPage ? "Loading ..." : "Load More"}
        </Button>
      )}
    </>
  );
}
