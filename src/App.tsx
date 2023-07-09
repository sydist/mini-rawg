import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformList from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export default function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "220px 1fr",
      }}
    >
      <GridItem area="nav" padding={4}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" padding={4}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main" padding={4}>
        <GameHeading />
        <HStack marginBottom={5} spacing={5}>
          <PlatformList />
          <SortSelector />
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}
