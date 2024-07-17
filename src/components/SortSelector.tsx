import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        sort
      </MenuButton>
      <MenuList>
        <MenuItem>helo 1</MenuItem>
        <MenuItem>helo 2</MenuItem>
        <MenuItem>helo 3</MenuItem>
      </MenuList>
    </Menu>
  );
};
export default SortSelector;
