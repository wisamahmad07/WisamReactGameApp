import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import CropImage from "../services/image-url";

const GenresList = () => {
  const { data, loading } = useGenres();

  return (
    <List padding={3} marginY={7}>
      {loading && <Spinner margin={50} padding={10} />}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              src={CropImage(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
