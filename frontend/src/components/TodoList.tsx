import React from "react";

const TodoList: React.FC = () => {
  const todoList = [{id:'t1', text: 'Do Laundry!'}];
  const pasrsedtodos = Array.isArray(todoList) 
    && todoList.map(todo =>  <li key={todo.id}>{todo.text}</li>)
  
  return (
    <>
    {pasrsedtodos}
    </>
  );
};

export default TodoList;