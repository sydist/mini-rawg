import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

export default function SearchInput() {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        placeholder="Search games ..."
        borderRadius={20}
        variant="filled"
      />
    </InputGroup>
  );
}
