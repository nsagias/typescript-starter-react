import React from "react";

const TodoList: React.FC = () => {
  const todoList = [{id:'t1', text: 'Do Laundry!'}];
  const pasrsedtodos = Array.isArray(todoList) 
    && todoList.map(todo => <h2> <li key={todo.id}>{todo.text}</li></h2>);
  
  return (
    <ul>
    {pasrsedtodos}
    </ul>
  );
};

export default TodoList;