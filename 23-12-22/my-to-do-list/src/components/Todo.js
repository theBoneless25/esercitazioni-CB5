import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { FaTrash } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUp = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUp} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <FaTrash onClick={() => removeTodo(todo.id)} className="delete" />
        <FiEdit2
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit"
        />
      </div>
    </div>
  ));
}

export default Todo;
