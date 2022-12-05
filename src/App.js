import React, { useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  function addNote(newNote) {
    setTodos((prev) => {
      return [...prev, newNote];
    });
  }

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form onAdd={addNote} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
