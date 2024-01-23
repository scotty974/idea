import { Menu, MenuButton, MenuList } from "@chakra-ui/react";
import data from "../../theme.js";
import { useState } from "react";
import { useEffect } from "react";
export default function Header() {
  
  const [textClass, setTextClass] = useState("");
  const [hoverBgClassName, setHoverBgClassName] = useState("");
  const [hoverTextClassName, sethoverTextClassName] = useState("");

  const [theme, setTheme] = useState([]);
  const themes = data.themes;

  const handleTheme = () => {
    setTheme(themes);
  };

  const selectedColor = (item: any) => {
    setTextClass(item.text);
    setHoverBgClassName(item.hoverBackground);
    sethoverTextClassName(item.hoverText);

    themes.forEach((themeItem) => {
      document.body.classList.remove(themeItem.background);
    });

    // Ajouter la classe du thème sélectionné
    document.body.classList.add(item.background);
    
  };
  useEffect(() => {
    handleTheme();
    
  }, []);
  return (
    <>
      <header className="my-2">
        <nav className="flex items-center justify-between">
          <h1 className={` font-bold text-4xl ${textClass}`}>
            Logo
          </h1>
          <Menu>
            <MenuButton
              className={` p-2 rounded-full px-4 font-semibold ${hoverBgClassName}  ${hoverTextClassName} ${textClass}`}
            >
              Theme
            </MenuButton>
            <MenuList>
              <div className="flex px-2 justify-start">
                {theme.map((item, index) => (
                  <span
                    className={`w-5 h-5  rounded-full mr-2 hover:cursor-pointer ${item.background}`}
                    onClick={() => selectedColor(item)}
                    key={index}
                  ></span>
                ))}
              </div>
            </MenuList>
          </Menu>
        </nav>
      </header>
    </>
  );
}
