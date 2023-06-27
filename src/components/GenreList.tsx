import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCropppedImageURL from "../services/image-url";

export default function GenreList() {
  const { genres } = useGenres();
  return (
    <List spacing={4}>
      {genres.map((genre) => {
        return (
          <ListItem key={genre.id}>
            <HStack>
              <Image
                boxSize={12}
                borderRadius={8}
                src={getCropppedImageURL(genre.image_background, 600, 400)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
}
