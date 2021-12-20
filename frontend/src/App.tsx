import React from 'react';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

function App() {
  const todoList = [{id:'t1', text: 'Do Laundry!'}];

  const todoAddHandler = (text: string) => {
    console.log('App Received Text: ', text)
  };
;

  return (
    <div className="App">
      <NewTodoForm />
      <TodoList items={todoList}/>
    </div>
  );
}

export default App;
