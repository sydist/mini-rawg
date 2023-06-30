import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCropppedImageURL from "../services/image-url";
import GenreListItemSkeleton from "./GenreListItemSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

export default function GenreList(props: Props) {
  const { data, error, isLoading } = useGenres();
  return (
    <List spacing={3}>
      {error && <Text color="red">{error}</Text>}
      {isLoading &&
        [...Array(16).keys()].map((x) => <GenreListItemSkeleton key={x} />)}
      {data.map((genre) => {
        return (
          <ListItem key={genre.id}>
            <HStack spacing={2}>
              <Image
                boxSize={8}
                borderRadius={8}
                src={getCropppedImageURL(genre.image_background)}
              />
              <Button
                onClick={() => props.onSelectGenre(genre)}
                fontSize="lg"
                variant="link"
                fontWeight={props.selectedGenre?.id === genre.id ? 700 : 400}
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
