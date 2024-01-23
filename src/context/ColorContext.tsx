// ColorContext.js
import { createContext, useContext, useState } from "react";

const ColorContext = createContext(null);

export const useColorContext = () => {
    
  return useContext(ColorContext);
};

export const ColorProvider = ({ children }) => {
  const [currentColor, setCurrentColor] = useState(""); // Vous pouvez également stocker plus d'informations ici

  const changeColor = (newColor:any) => {
    setCurrentColor(newColor);
  };

  return (
    <ColorContext.Provider value={{ currentColor, changeColor }}>
      {children}
    </ColorContext.Provider>
  );
};
