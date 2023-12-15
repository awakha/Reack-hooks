import {
  type ChangeEvent,
  type MouseEvent,
  useState,
  type Dispatch,
  SetStateAction,
} from "react";
import axios from "axios";
import type { TodosType } from "../../App";

type InputType = {
  title: string;
  text: string;
};

type FormPropsType = {
  setTodos: Dispatch<SetStateAction<TodosType>>;
};

export default function Form({ setTodos }: FormPropsType): JSX.Element {
  const [inputs, setInputs] = useState<InputType>({ title: "", text: "" });

  const chengeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.name, e.target.value);
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const addHendler = async (
    e: MouseEvent<HTMLButtonElement>
  ): Promise<void> => {
    console.log(e.target);
    console.log("inputs", inputs);
    try {
      const response = await axios.post("http://localhost:3100/api", inputs);
      if (response.status === 200) {
        setTodos((prev) => [...prev, response.data]);
        setInputs({ title: "", text: "" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form>
      <input
        onChange={chengeHandler}
        type="text"
        name="title"
        placeholder="title"
        value={inputs.title}
      />
      <input
        onChange={chengeHandler}
        type="text"
        name="text"
        placeholder="text"
        value={inputs.text}
      />
      <button onClick={addHendler} type="button">
        Send
      </button>
    </form>
  );
}
