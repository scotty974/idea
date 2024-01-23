import { useState } from "react";
import Form from "./form.interface";
import Props from "./props.interface";
import { useColorContext } from "../../context/ColorContext";

export default function InputWords({ getWords }: Props) {
  const { currentColor } = useColorContext(); // Utilisez useContext avec useColorContext

  const [words, setWords] = useState<Form>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWords({ value: e.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getWords(words?.value);
    setWords({ value: "" });
  };
console.log(currentColor)
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          id="text"
          className={`my-16 py-4 px-2 w-full focus:outline-none text-4xl font-bold hover:cursor-pointer  ${currentColor.text} ${currentColor.hoverBackground}`}
          autoFocus
          value={words?.value}
          onChange={handleChange}
        />
      </form>
    </>
  );
}
