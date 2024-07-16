import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const badgeColor = score > 75 ? "green" : score > 50 ? "yellow" : "";
  return (
    <Badge paddingX={2} borderRadius={3} colorScheme={badgeColor}>
      {score}
    </Badge>
  );
};

export default CriticScore;
