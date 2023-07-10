import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

function Layout() {
  return (
    <>
      <Box p={6}>
        <NavBar />
      </Box>
      <Box p={6}>
        <Outlet />
      </Box>
    </>
  );
}

export default Layout;
