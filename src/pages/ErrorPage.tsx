import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

function ErrorPage() {
  const error = useRouteError();
  const message = isRouteErrorResponse(error)
    ? "This page does not exist."
    : "An unexpected error has occured.";

  return (
    <>
      <Box padding={4}>
        <NavBar />
      </Box>
      <Box padding={4}>
        <Heading marginBottom={1}>Oops!</Heading>
        <Text>{message}</Text>
      </Box>
    </>
  );
}

export default ErrorPage;
