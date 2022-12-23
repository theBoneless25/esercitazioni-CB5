import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addEl = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      //Funzione che aggiunge nuovi oggetti
      return;
    }

    const newTodo = [todo, ...todos];
    setTodos(newTodo);
    //console.log(todo, ...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((el) => el.map((i) => (i.id === todoId ? newValue : i)));
  };

  const removeTodo = (id) => {
    const removeObj = [...todos].filter((todo) => todo.id !== id); /// filter che rimuove un elemento tramite icons trash

    setTodos(removeObj);
  };

  const completeTodo = (id) => {
    let updateEl = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete; /// costante che aggiunge un nuovo oggetto con id univoco
      }
      return todo;
    });
    setTodos(updateEl);
  };

  return (
    <div>
      <img src="https://www.pngmart.com/files/13/Christmas-Fir-Tree-PNG-Clipart.png"></img>
      <h1>Esprimi il tuo desiderio natalizio!</h1>
      <TodoForm onSubmit={addEl} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoList;
