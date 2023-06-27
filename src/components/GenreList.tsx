import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCropppedImageURL from "../services/image-url";
import GenreListItemSkeleton from "./GenreListItemSkeleton";

export default function GenreList() {
  const { data, error, isLoading } = useGenres();
  return (
    <List spacing={4}>
      {error && <Text color="red">{error}</Text>}
      {isLoading &&
        [...Array(16).keys()].map((x) => <GenreListItemSkeleton key={x} />)}
      {data.map((genre) => {
        return (
          <ListItem key={genre.id}>
            <HStack spacing={3}>
              <Image
                boxSize={12}
                borderRadius={8}
                src={getCropppedImageURL(genre.image_background)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
}
