import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function ScoreBadge({ score }: Props) {
  return (
    <Badge
      paddingX={2}
      borderRadius={6}
      colorScheme={score > 75 ? "green" : score > 50 ? "yellow" : "red"}
    >
      {score}
    </Badge>
  );
}

export default ScoreBadge;
