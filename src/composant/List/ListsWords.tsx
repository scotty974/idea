import { useState, useEffect } from "react";
import { useColorMode } from "@chakra-ui/react";
export default function ListWords({ word }: any) {
  const { colorMode } = useColorMode();
  const textClassName = colorMode === "light" ? "text-primary" : "text-white";

  const [wordsArray, setWordsArray] = useState<string[]>([]);

  useEffect(() => {
    if (word) {
      // Vérifiez que word n'est pas vide ou undefined avant d'ajouter à wordsArray
      setWordsArray((prevWordsArray) => [...prevWordsArray, word].reverse());
    }
  }, [word]);
  return (
    <>
      <section className="flex flex-wrap">
        {wordsArray.map((item, index) => (
          <span
            key={index}
            className={`mr-4  font-semibold text-3xl ${textClassName}`}
          >
            {item}
          </span>
        ))}
      </section>
    </>
  );
}
