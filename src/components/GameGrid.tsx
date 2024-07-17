import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import LoadingSkeleton from "./LoadingSkeleton";
import GameCardContainer from "./GameCardContainer";
import useGames from "../hooks/useGames";
import { Genres } from "../hooks/useGenres";
import { Platforms } from "../hooks/usePlatform";

interface Props {
  selectedGenre: Genres | null;
  selectedPlatforms: Platforms | null;
}

const GameGrid = ({ selectedGenre, selectedPlatforms }: Props) => {
  const { error, data, loading } = useGames(selectedGenre, selectedPlatforms);
  const skeletonsNumber = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text color="red">{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={3}
        padding={10}
      >
        {loading &&
          skeletonsNumber.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <LoadingSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
