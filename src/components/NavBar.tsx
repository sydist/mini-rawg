import { HStack, Image, Link, Spacer } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link as RouterLink } from "react-router-dom";

export default function NavBar() {
  return (
    <HStack as="nav" spacing={6}>
      <Link as={RouterLink} to="/">
        <Image src={logo} boxSize={10} alt="Mini Rawg " />
      </Link>
      <Spacer />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}
