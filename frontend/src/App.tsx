import React from 'react';
import TodoList from './components/TodoList';

function App() {
  const todoList = [{id:'t1', text: 'Do Laundry!'}];
  return (
    <div className="App">
      <TodoList items={todoList}/>
    </div>
  );
}

export default App;
