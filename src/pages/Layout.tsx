import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

function Layout() {
  return (
    <>
      <Box padding={4}>
        <NavBar />
      </Box>
      <Outlet />
    </>
  );
}

export default Layout;
