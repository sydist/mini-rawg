import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../hooks/useGameQueryStore";

export default function SearchInput() {
  const searchRef = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        if (searchRef.current) setSearchText(searchRef.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          placeholder="Search games ..."
          ref={searchRef}
          borderRadius={20}
          variant="filled"
        />
      </InputGroup>
    </form>
  );
}
