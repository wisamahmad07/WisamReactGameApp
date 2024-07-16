import { List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenresList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((genre) => (
        <ListItem>{genre.name}</ListItem>
      ))}
    </List>
  );
};

export default GenresList;
