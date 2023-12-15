import React from "react";
import { useState } from "react";

export default function Form(): JSX.Element {
  const [inputs, setInputs] = useState({ title: "", text: "" });

  const changeHandler = (e: any) => {
    console.log(e.target.name, e.target.value);
  };

  return (
    <form>
      <input
        onChange={changeHandler}
        type="text"
        name="title"
        placeholder="title"
      />
      <input
        onChange={changeHandler}
        type="text"
        name="text"
        placeholder="text"
      />
      <button type="button">Send</button>
    </form>
  );
}
