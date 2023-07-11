import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCropppedImageURL from "../services/getCroppedImageURL";
import GenreListItemSkeleton from "./GenreListItemSkeleton";
import genres from "../data/genres";
import useGameQueryStore from "../hooks/useGameQueryStore";

export default function GenreList() {
  const { data, error, isLoading } = useGenres();
  const [selectedGenreId, setSelectedGenreId] = useGameQueryStore((s) => [
    s.gameQuery.genreId,
    s.setGenreId,
  ]);

  if (error) return null;

  return (
    <List spacing={3} aria-label="Genres">
      {isLoading &&
        [...Array(genres.length).keys()].map((x) => (
          <GenreListItemSkeleton key={x} />
        ))}
      {data?.map((genre) => {
        return (
          <ListItem key={genre.id}>
            <HStack spacing={2}>
              <Image
                htmlWidth={1}
                htmlHeight={1}
                boxSize={8}
                borderRadius={8}
                objectFit="cover"
                src={getCropppedImageURL(genre.image_background)}
                alt={""}
              />
              <Button
                onClick={() => setSelectedGenreId(genre.id)}
                fontSize="lg"
                variant="link"
                fontWeight={selectedGenreId === genre.id ? 700 : 400}
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
}
