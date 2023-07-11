import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const LIMIT = 200;

function ExpandableText({ children }: Props) {
  const [expanded, setExpanded] = useState(false);

  if (!children) return null;

  if (children.length <= LIMIT) return <Text>{children}</Text>;

  const summary = expanded ? children : children.slice(0, LIMIT) + "...";

  return (
    <>
      <Text>{summary}</Text>
      <Button
        colorScheme="green"
        textDecoration="underline"
        _hover={{
          textDecoration: "none",
        }}
        variant="link"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show less" : "Show more"}
      </Button>
    </>
  );
}

export default ExpandableText;
