import { useState } from "react";
import Form from "./form.interface";
import Props from "./props.interface";

export default function InputWords({getWords} : Props) {
  const [words, setWords] = useState<Form>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWords({ value: e.target.value });
    
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    getWords(words?.value)
    setWords({value : ''})
    
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          id="text"
          className="my-16 py-4 px-2 w-full focus:outline-none text-4xl text-primary font-bold hover:bg-primary hover:cursor-pointer hover:bg-opacity-20"
          autoFocus
          value={words?.value}
          onChange={handleChange}
        />
      </form>
    </>
  );
}
