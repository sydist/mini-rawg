import { Heading, List, ListItem } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  title: string;
  items: string[] | ReactNode[];
}

function DetailsList({ title, items }: Props) {
  return (
    <>
      <Heading size="sm" as="h3" color="gray.600">
        {title}
      </Heading>
      <List>
        {items.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </List>
    </>
  );
}

export default DetailsList;
