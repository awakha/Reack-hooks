import { type Dispatch, SetStateAction, useEffect } from "react";
import { type TodoType, type TodosType } from "../../App";
import axios from "axios";

type ListPropsType = {
  todo: TodoType;
  setTodos: Dispatch<SetStateAction<TodosType>>;
};

export default function List({ todo, setTodos }: ListPropsType): JSX.Element {
  console.log(todo);

  useEffect(() => {
    return () => {
      console.log("ComponentWillUnmoun"); // ComponentWillUnmoun
    };
  }, []);

  const deleteHandler = async (): Promise<void> => {
    try {
      const resonse = await axios.delete(
        `http://localhost:3100/api/${todo.id}`
      );
      if (resonse.status === 200) {
        setTodos((prev) => prev.filter((el) => el.id !== todo.id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>{todo.title}</h1>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}
