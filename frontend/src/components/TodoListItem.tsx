import React from "react";

interface TodoListItemProps {
  text: string;
}

const TodoListItem: React.FC<TodoListItemProps> = props => {
  const {text} = props;
  
  return (
    <h2>
      <li>
        <span>{text}</span> <button>DELETE</button>
      </li>
    </h2>
  );
};

export default TodoListItem;