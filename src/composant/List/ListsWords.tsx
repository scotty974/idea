import { useState, useEffect } from "react";

export default function ListWords({ word }: any) {
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
        <span key={index} className="mr-4 text-primary font-semibold text-3xl">{item}</span>
      ))}
    </section>
     
    </>
  );
}
