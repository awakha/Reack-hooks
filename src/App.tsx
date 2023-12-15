import { useState } from "react";
import Form from "./components/form/Form";
// Тип данных,возвращаемый useState является массивом, где
// - первый аргумент - текущее состояние
// - второй аргумент - функция для обновления этого состояния

import "./App.css";
function App(): JSX.Element {
  // как (храгить)записывать состояние внутри нашего компонента при помощьи хука useState
  // который нам возвращает две переменные
  // - переменная count в которой мы будем хранить данные
  // - функция, при помощьи которой мы будем изменять данную переменную(count) с данными
  // мы напрямую не можем изменить переменную count. Не можем на прямую мутировать состояние(state) внутри нашего компонента
  // Поэтому нам нужно вызывать функцию setCount, которая будем изменять нам переменную

  //                                джинерики
  const [count, setCount] = useState<number>(0);

  // Данная callback функция принимает предыдущее состояние  нашего count(т.е. у нас сейчас count 0)
  const increment = (): void => {
    // Здесь в переменной prev находитс 0, а мы хотим при нажатии на кнопку увеличить на +1
    // соответсвенно, мы через ф-ю setCount изменяем нашу переменную count
    setCount((prev) => prev + 1);
  };
  const decrement = (): void => {
    setCount((prev) => prev - 1);
  };
  // return отрисовывает UI компоненты,а до return мы описываем основную логику
  return (
    //фрагменты
    <>
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
      <Form />
    </>
  );
}

export default App;
