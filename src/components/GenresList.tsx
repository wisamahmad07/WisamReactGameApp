import { List, ListItem, VStack } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenresList = () => {
  const { genres } = useGenres();
  return (
    <List>
      {genres.map((g) => (
        <ListItem>{g.name}</ListItem>
      ))}
    </List>
  );
};

export default GenresList;
