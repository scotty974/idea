import { useState } from "react";
import Form from "./form.interface";
import Props from "./props.interface";
import { useColorMode } from "@chakra-ui/react";
export default function InputWords({ getWords }: Props) {
  const { colorMode } = useColorMode();
  const textClassName = colorMode === "light" ? "text-primary" : "text-white";
  const hoverBgClassName =
    colorMode === "light" ? "hover:bg-secondary" : "hover:bg-slate-900";

  const [words, setWords] = useState<Form>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWords({ value: e.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getWords(words?.value);
    setWords({ value: "" });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          id="text"
          className={`my-16 py-4 px-2 w-full focus:outline-none text-4xl  font-bold  hover:cursor-pointer hover:bg-opacity-20 ${textClassName} ${hoverBgClassName}`}
          autoFocus
          value={words?.value}
          onChange={handleChange}
        />
      </form>
    </>
  );
}
