import { useState } from "react";
import "./App.css";

function App(): JSX.Element {
  //                                джинерики
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
    </>
  );
}

export default App;
