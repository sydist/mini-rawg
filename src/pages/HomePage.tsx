import { Grid, GridItem, HStack, Heading, Show } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

function HomePage() {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`, // 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "180px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem as="aside" area="aside">
          <Heading fontSize="2xl" marginBottom={6}>
            Genres
          </Heading>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem as="main" area="main">
        <GameHeading />
        <HStack marginBottom={5} spacing={5}>
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default HomePage;
