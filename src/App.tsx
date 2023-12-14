import { useState } from "react";
import Form from "./components/form/Form";

import "./App.css";

function App(): JSX.Element {
  //                                джинерики
  const [count, setCount] = useState<number>(0);
  //              функция не возвращает никакого значения
  const increment = (): void => {
    setCount((prev) => prev + 1);
  };
  const decrement = (): void => {
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
      <Form />
    </>
  );
}

export default App;
