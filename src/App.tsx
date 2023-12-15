import { useEffect, useState } from "react";
import Form from "./components/form/Form";

import "./App.css";
import axios from "axios";
import List from "./components/list/List";
// Тип данных,возвращаемый useState является массивом, где
// - первый аргумент - текущее состояние
// - второй аргумент - функция для обновления этого состояния

export type TodoType = {
  id: number;
  title: string;
  text: string;
  createdAt: Date;
  updatedAt: Date;
};

export type TodosType = TodoType[];

function App(): JSX.Element {
  // как (храгить)записывать состояние внутри нашего компонента при помощьи хука useState
  // который нам возвращает две переменные
  // - переменная count в которой мы будем хранить данные
  // - функция, при помощьи которой мы будем изменять данную переменную(count) с данными
  // мы напрямую не можем изменить переменную count. Не можем на прямую мутировать состояние(state) внутри нашего компонента
  // Поэтому нам нужно вызывать функцию setCount, которая будем изменять нам переменную

  //                                джинерики
  console.log("App");
  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<TodosType>([]);

  useEffect(() => {
    console.log("useeffect");
    axios.get("http://localhost:3100/api").then((res) => setTodos(res.data));
  }, []);

  // Данная callback функция принимает предыдущее состояние  нашего count(т.е. у нас сейчас count 0)
  const increment = (): void => {
    // Здесь в переменной prev находитс 0, а мы хотим при нажатии на кнопку увеличить на +1
    // соответсвенно, мы через ф-ю setCount изменяем нашу переменную count
    setCount((prev) => prev + 1);
  };
  const decrement = (): void => {
    setCount((prev) => prev - 1);
  };
  /*
  useEffect(() => {
    //Component did mount
    console.log("useEffect");
    return () => {
      console.log("Component will unmount"); // Component will unmount
    };
  }, [count]); // Component did mount
*/

  // return отрисовывает UI компоненты,а до return мы описываем основную логику
  return (
    //фрагменты
    <>
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
      <hr />
      <Form setTodos={setTodos} />
      {todos.map((todo) => (
        <List key={todo.id} todo={todo} setTodos={setTodos} />
      ))}
    </>
  );
}

export default App;
