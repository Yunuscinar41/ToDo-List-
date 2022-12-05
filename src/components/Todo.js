import React from "react";

const Todo = ({ text, setTodos, index, todo }) => {
  const deleteHandler = () => {
    setTodos((prev) => {
      return prev.filter((item, id) => {
        return id !== index;
      });
    });
  };

  const completedHandler = () => {
    setTodos((prev) => {
      return prev.map((item, id) => {
        return id === index ? { ...item, completed: !item.completed } : item;
      });
    });
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completedHandler} className="complete-btn">
        <i className="fas fa-chech"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-chech"></i>
      </button>
    </div>
  );
};

export default Todo;
