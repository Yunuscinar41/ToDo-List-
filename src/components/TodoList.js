import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo, index) => (
          <Todo
            setTodos={setTodos}
            index={index}
            todo={todo}
            key={index}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
