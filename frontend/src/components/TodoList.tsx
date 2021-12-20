import React from "react";
import TodoListItem from "./TodoListItem";

interface TodoListProps {
  items: {id: string, text: string}[];
}

const TodoList: React.FC<TodoListProps> = props => {
 
  const pasrsedtodos = Array.isArray(props.items) 
    && props.items.map(todo => 
    <TodoListItem {...todo} key={todo.id}/>
    );
  
  return (
    <ul>
    {pasrsedtodos}
    </ul>
  );
};

export default TodoList;