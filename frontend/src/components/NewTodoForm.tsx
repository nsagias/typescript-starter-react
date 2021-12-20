import React from "react";

const NewTodoForm: React.FC = () => {
  return (
    <form>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text"  placeholder="Enter Todo ..."/>
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodoForm;