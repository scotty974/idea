import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

import { ChevronDown } from "lucide-react";
export default function Header() {
  return (
    <>
      <header className=" my-2">
        <nav className="flex items-center justify-between">
          <h1 className="text-primary font-bold  text-4xl">Logo</h1>
          <Menu>
            <MenuButton
              className="text-secondary p-2 rounded-full px-4 font-semibold hover:bg-primary hover:bg-opacity-10"
              rigthicon={<ChevronDown />}
            >
              Theme
            </MenuButton>
            <MenuList  >
              <div className="flex px-2 justify-start">
                <span className="w-5 h-5 bg-black rounded-full mr-2"></span>
              </div>
            </MenuList>
          </Menu>
        </nav>
      </header>
    </>
  );
}
