import React, { useState } from "react";

const Form = (props) => {
  const [note, setNote] = useState("");

  const inputTextHandler = (e) => {
    const { value } = e.target;
    setNote(value);
  };

  const submitTodoHandler = (e) => {
    props.onAdd({ text: note, completed: false });
    setNote("");
    e.preventDefault();
  };

  const statusHandler = (e) => {
    props.setStatus(e.target.value);
  };

  return (
    <form>
      <input
        onChange={inputTextHandler}
        type="text"
        name="text"
        value={note}
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
