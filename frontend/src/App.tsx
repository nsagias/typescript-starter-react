import React, { useState } from 'react';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';
import uuid from "uuid";

const App: React.FC = () => {
  const [todos, setTodos] = useState([]);

  const todoAddHandler = (text: string) => {
    console.log('App Received Text: ', text);
    setTodos([{id: uuid.v4()}])
  };

  return (
    <div className="App">
      <NewTodoForm onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
