import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function GameCardContainer(props: Props) {
  return (
    <Box
      _hover={{ transform: "scale(1.05)" }}
      transition="transform 300ms ease"
      borderRadius={8}
      overflow="hidden"
    >
      {props.children}
    </Box>
  );
}
