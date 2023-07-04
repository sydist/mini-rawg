import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCropppedImageURL from "../services/image-url";
import GenreListItemSkeleton from "./GenreListItemSkeleton";
import genres from "../data/genres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

export default function GenreList(props: Props) {
  const { data, error, isLoading } = useGenres();

  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={6}>
        Genres
      </Heading>
      <List spacing={3}>
        {isLoading &&
          [...Array(genres.length).keys()].map((x) => (
            <GenreListItemSkeleton key={x} />
          ))}
        {data?.map((genre) => {
          return (
            <ListItem key={genre.id}>
              <HStack spacing={2}>
                <Image
                  boxSize={8}
                  borderRadius={8}
                  objectFit="cover"
                  src={getCropppedImageURL(genre.image_background)}
                />
                <Button
                  onClick={() => props.onSelectGenre(genre)}
                  fontSize="lg"
                  variant="link"
                  fontWeight={props.selectedGenreId === genre.id ? 700 : 400}
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
    </>
  );
}
