import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

export default function NavBar() {
  return (
    <HStack spacing={4}>
      <Image src={logo} boxSize={10} alt="Mini-Rawg Logo" marginRight="auto" />
      <Box w="100%" maxWidth={300}>
        <SearchInput />
      </Box>
      <ColorModeSwitch />
    </HStack>
  );
}
