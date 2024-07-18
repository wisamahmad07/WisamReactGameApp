import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  SearchData: (searchData: string) => void;
}

const Navbar = ({ SearchData }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput SearchData={SearchData} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
