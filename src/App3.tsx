import React, { useState } from "react";

function App3() {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedName(name);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} />
        <button type="submit">Отправить</button>
      </form>
      {submittedName && <p>Привет, {submittedName}!</p>}
    </>
  );
}

export default App3;
