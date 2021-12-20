import React, { useState } from 'react';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const todoList = [{id:'t1', text: 'Do Laundry!'}];

  const todoAddHandler = (text: string) => {
    console.log('App Received Text: ', text);
  };

  return (
    <div className="App">
      <NewTodoForm onAddTodo={todoAddHandler} />
      <TodoList items={todoList} />
    </div>
  );
}

export default App;
