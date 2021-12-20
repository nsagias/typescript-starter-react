import React from "react";

interface TodoListProps {
  items: {id: string, text: string}[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = props => {
 
  const pasrsedtodos = Array.isArray(props.items) 
    && props.items.map(todo => 
    // <TodoListItem 
    //   {...todo} 
    //   key={todo.id} 
    //   onDeleteTodo={() => (todo.id)}
    // />
    <li key={todo.id}>
      <span>{todo.text}</span> 
      <button onClick={props.onDeleteTodo.bind(null, todo.id)}>DELETE</button>
    </li>
    );
  
  return (
    <ul>
    {pasrsedtodos}
    </ul>
  );
};

export default TodoList;