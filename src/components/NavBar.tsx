import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <HStack w="100%" spacing={4}>
      <Box w="100%">
        <Link to="/">
          <Image
            src={logo}
            boxSize={10}
            alt="Mini-Rawg Logo"
            marginRight="auto"
          />
        </Link>
      </Box>
      <Box w="100%" maxWidth={320}>
        <SearchInput />
      </Box>
      <ColorModeSwitch />
    </HStack>
  );
}
