import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { VStack } from "@chakra-ui/react";

function Layout() {
  return (
    <VStack align={"start"} spacing={8} padding={4}>
      <NavBar />
      <Outlet />
    </VStack>
  );
}

export default Layout;
