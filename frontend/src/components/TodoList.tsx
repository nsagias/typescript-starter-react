import React from "react";

interface TodoListProps {
  items: {id: string, text: string}[];
}

const TodoList: React.FC<TodoListProps> = props => {
 
  const pasrsedtodos = Array.isArray(props.items) 
    && props.items.map(todo => 
    <h2>
      <li key={todo.id}>{todo.text}</li>
    </h2>
    );
  
  return (
    <ul>
    {pasrsedtodos}
    </ul>
  );
};

export default TodoList;