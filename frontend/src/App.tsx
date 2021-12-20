import React, { useState } from 'react';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';
import uuid from "uuid";
import { ITodoItem } from './todo.model';


const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodoItem[]>([]);

  const todoAddHandler = (text: string) => {
    console.log('App Received Text: ', text);
    setTodos([{id: uuid.v4(),text: text}])
  };

  return (
    <div className="App">
      <NewTodoForm onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
