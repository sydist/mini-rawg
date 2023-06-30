import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

export default function SearchInput(props: Props) {
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();
        props.onSearch(searchRef.current?.value || "");
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
