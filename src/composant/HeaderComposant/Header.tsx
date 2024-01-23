import { Menu, MenuButton, MenuList } from "@chakra-ui/react";
import data from "../../theme.js";
import { useState, useEffect } from "react";
import { useColorContext } from "../../context/ColorContext.js";

export default function Header() {
  const {currentColor, changeColor} = useColorContext()
  const [textClass, setTextClass] = useState("");
  const [hoverBgClassName, setHoverBgClassName] = useState("");
  const [hoverTextClassName, setHoverTextClassName] = useState("");

  const [theme, setTheme] = useState([]);
  const themes = data.themes;

  const handleTheme = () => {
    setTheme(themes);
  };

  const selectedColor = (item) => {
    setTextClass(item.text);
    setHoverBgClassName(item.hoverBackground);
    setHoverTextClassName(item.hoverText);

    // Retirer les classes des thèmes précédents
    themes.forEach((themeItem) => {
      document.body.classList.remove(themeItem.background);
    });

    // Ajouter la classe du thème sélectionné
    document.body.classList.add(item.background);
    changeColor(item);
  };

  useEffect(() => {
    handleTheme();

    // Ajouter la classe du thème par défaut ici
    const defaultTheme = themes.find((item) => item.isDefault);
    if (defaultTheme) {
      selectedColor(defaultTheme);
    }
  }, []); // Assurez-vous que useEffect s'exécute une seule fois au chargement initial

  return (
    <>
      <header className="my-2">
        <nav className={`flex items-center justify-between ${textClass}`}>
          <h1 className="font-bold text-4xl">Logo</h1>
          <Menu>
            <MenuButton
              className={`p-2 rounded-full px-4 font-semibold ${hoverBgClassName} ${hoverTextClassName} ${textClass}`}
            >
              Theme
            </MenuButton>
            <MenuList>
              <div className="flex px-2 justify-start">
                {theme.map((item, index) => (
                  <span
                    className={`w-5 h-5 rounded-full mr-2 hover:cursor-pointer ${item.background}`}
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
