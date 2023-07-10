import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../hooks/useGameQueryStore";

export default function SortSelector() {
  const sortOrders = [
    { value: "-relevance", label: "Relevance" },
    { value: "-created", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const [selectedSort, setSelectedSort] = useGameQueryStore((s) => [
    s.gameQuery.sort,
    s.setSort,
  ]);

  const currentSortOrder = sortOrders.find((x) => x.value === selectedSort);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder, index) => (
          <MenuItem
            key={index}
            value={sortOrder.value}
            onClick={() => setSelectedSort(sortOrder.value)}
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
