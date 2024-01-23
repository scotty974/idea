import {
  Menu,
  MenuButton,
  MenuList,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import data from "../../theme.js";
import { useState, useEffect } from "react";
import { useColorContext } from "../../context/ColorContext.js";
import { HelpCircle } from "lucide-react";

export default function Header() {
  const { changeColor } = useColorContext();
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
          <div className="flex items-center">
            <Menu>
              <MenuButton
                className={`p-2 rounded-full px-4 font-semibold ${hoverBgClassName} ${hoverTextClassName} ${textClass} mx-2`}
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

            <Popover>
              <PopoverTrigger>
                <HelpCircle className="hover:cursor-pointer" />
              </PopoverTrigger>
              <PopoverContent className="text-white">
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Information !</PopoverHeader>
                <PopoverBody >
                  Libérez votre créativité sur notre site ! Écrivez librement,
                  surmontez le syndrome de la feuille blanche, et personnalisez
                  votre expérience avec des thèmes interactifs. Exprimez-vous
                  dès maintenant !
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </div>
        </nav>
      </header>
    </>
  );
}
