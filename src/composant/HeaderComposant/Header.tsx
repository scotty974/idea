import { Menu, MenuButton, MenuList, useColorMode } from "@chakra-ui/react";
import { ChevronDown } from "lucide-react";
import data from "../../theme.js";
import { useState } from "react";
import { useEffect } from "react";
export default function Header() {
  const { toggleColorMode, colorMode } = useColorMode();
  const textClassName = colorMode === "light" ? "text-primary" : "text-white";
  const hoverBgClassName = colorMode === "light" ? "hover:bg-secondary" : "hover:bg-slate-900";
  const hoverTextClassName = colorMode === "light" ? "hover:text-three" : "hover:text-white"

  const [theme, setTheme] = useState([])
  const themes = data.themes

  const handleTheme = () =>{
    setTheme(themes)
  }
 
  useEffect(()=>{
    handleTheme()
    console.log(theme)
  },[])
  return (
    <>
      <header className="my-2">
        <nav className="flex items-center justify-between">
          <h1 className={`text-primary font-bold text-4xl ${textClassName}`}>Logo</h1>
          <Menu>
            <MenuButton
              className={`text-primary p-2 rounded-full px-4 font-semibold ${hoverBgClassName}  ${hoverTextClassName} ${textClassName}`}
              rightIcon={<ChevronDown />}
            >
              Theme
            </MenuButton>
            <MenuList>
              <div className="flex px-2 justify-start">
                {theme.map((item, index)=>  <span
                  className={`w-5 h-5  rounded-full mr-2 hover:cursor-pointer ${item.background}`}
                  onClick={toggleColorMode}
                  key={index}
                ></span>)}
               
              </div>
            </MenuList>
          </Menu>
        </nav>
      </header>
    </>
  );
}
