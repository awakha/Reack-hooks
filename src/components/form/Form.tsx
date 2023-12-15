import { type ChangeEvent, type MouseEvent, useState } from "react";

type InputType = {
  title: string;
  text: string;
};

export default function Form(): JSX.Element {
  //                                        собираем данные сразу со всей формы
  const [inputs, setInputs] = useState<InputType>({ title: "", text: "" });
  //                                 принимает джинерики
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // перед тем как записать какие-то данные по ключу, что мы вводим мы должны ввернуть сначала те данные, которые уже были
    // поэтому здесь разворачиваем и возвращаем то состояние, которое хранилось в inputs
    setInputs((prev: { title: string; text: string }) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  //             передаем по какому элементу будем кликать
  const addHandler = (e: MouseEvent<HTMLButtonElement>) => {
    // чтобы данные очищались
    // и пишем то состояние, которое мы хотим изначально видеть в inputs
    console.log(inputs);
    setInputs({ title: "", text: "" }); //очищвет input
  };

  // имя мы дали по названию моделей в БД (title)
  // мы должны связать value инпутов с состоянием inputs которрое мы храним в хуке useState
  // для этого длбавляем атрибут value и указываем, что у input изначально будет пустая строка, либо же то, чтомы введем в наши инпуты, после того, как мы вызовем setInputs
  return (
    <form>
      <input
        onChange={changeHandler}
        type="text"
        name="title"
        placeholder="title"
        value={inputs.title}
      />
      <input
        onChange={changeHandler}
        type="text"
        name="text"
        placeholder="text"
        value={inputs.text}
      />
      <button onClick={addHandler} type="button">
        Send
      </button>
    </form>
  );
}
