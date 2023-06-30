import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

export default function NavBar(props: Props) {
  return (
    <HStack spacing={4}>
      <Image src={logo} boxSize={10} alt="Mini-Rawg Logo" marginRight="auto" />
      <Box w="100%" maxWidth={320}>
        <SearchInput onSearch={props.onSearch} />
      </Box>
      <ColorModeSwitch />
    </HStack>
  );
}
