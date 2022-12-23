import React, { useEffect, useRef, useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const change = (e) => {
    setInput(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 200),
      text: input,
    });
    setInput("");
  };

  return (
    <form className="form" onSubmit={submit}>
      <input
        type="text"
        placeholder="Es. Fifa 23,Bicicletta"
        value={input}
        name="text"
        className="todo-form"
        onChange={change}
      />
      <button className="button-list">Aggiungi</button>
    </form>
  );
}

export default TodoForm;
