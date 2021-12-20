import React, { useRef } from "react";

const NewTodoForm: React.FC = () => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    console.log(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input 
          type="text" 
          id="todo-text" 
          ref={textInputRef} 
          placeholder="Enter Todo ..."
        />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodoForm;