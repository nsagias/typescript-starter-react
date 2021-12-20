import React, { useRef } from "react";

const NewTodoForm: React.FC = () => {
  const useInputRef = useRef();

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={useInputRef} placeholder="Enter Todo ..."/>
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodoForm;