import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Games } from "../hooks/useGames";

interface Props {
  game: Games;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card overflow="hidden" borderRadius={10}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="20px">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
