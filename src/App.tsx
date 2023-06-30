import {
  Box,
  Flex,
  Grid,
  GridItem,
  Show,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformList from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "248px 1fr",
      }}
    >
      <GridItem area="nav" padding={4}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" padding={4}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main" padding={4}>
        <Box marginBottom={2}>
          <PlatformList
            selectedPlatform={selectedPlatform}
            onSelectPlatform={(platform) => setSelectedPlatform(platform)}
          />
        </Box>
        <GameGrid
          selectedPlatform={selectedPlatform}
          selectedGenre={selectedGenre}
        />
      </GridItem>
    </Grid>
  );
}
