import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import CropImage from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genres) => void;
  selectedGenre: Genres | null;
}

const GenresList = ({ onSelectGenre, selectedGenre }: Props) => {
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
            <Button
              variant="link"
              onClick={() => onSelectGenre(genre)}
              fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
