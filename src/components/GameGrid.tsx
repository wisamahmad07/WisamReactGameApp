import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import LoadingSkeleton from "./LoadingSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { error, games, loading } = useGames();
  const skeletonsNumber = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text color="red">{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding={10}
      >
        {loading &&
          skeletonsNumber.map((skeleton) => (
            <GameCardContainer>
              <LoadingSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
