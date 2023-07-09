import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function GameGrid() {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();

  if (error) return <Text color="red">{error.message}</Text>;

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<></>}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4, "2xl": 6 }}
        spacing={6}
      >
        {isLoading &&
          [...Array(18).keys()].map((x) => (
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
    </InfiniteScroll>
  );
}
