import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function GameCardContainer(props: Props) {
  return (
    <Box borderRadius={8} overflow="hidden">
      {props.children}
    </Box>
  );
}
