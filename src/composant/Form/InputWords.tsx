import { useState } from "react";
import Form from "./form.interface";
import Props from "./props.interface";

export default function InputWords({getWords} : Props) {
  const [words, setWords] = useState<Form>();

  const handleChange = (e: any) => {
    setWords({ value: e.target.value });
    
  };

  const handleSubmit = (event:any) => {
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
          className="my-16 py-4 px-2 w-full focus:outline-none text-4xl text-primary font-bold "
          autoFocus
          value={words?.value}
          onChange={handleChange}
        />
      </form>
    </>
  );
}
