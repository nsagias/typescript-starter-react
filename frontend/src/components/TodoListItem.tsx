import React from "react";

interface TodoListItemProps {
  text: string;
}

const TodoListItem: React.FC<TodoListItemProps> = props => {
  const {text} = props;
  
  return (
    <h2>
      <li>{text}</li>
    </h2>
  );
};

export default TodoListItem;