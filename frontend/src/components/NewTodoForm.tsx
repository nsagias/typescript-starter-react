import React, { useRef } from "react";

interface NewTodoProps {
  onAddTodo: (enteredText: string) => void;
}

const NewTodoForm: React.FC<NewTodoProps> = props => {
  const {onAddTodo} = props;
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    onAddTodo(enteredText);
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