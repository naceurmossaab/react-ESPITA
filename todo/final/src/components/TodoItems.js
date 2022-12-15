import React from 'react';
import TodoItem from './TodoItem.js';

const TodoItems = ({ todos, remove }) => {
  return (
    <div className="items">
      <ul>
        {todos.map((todo, i) => <TodoItem key={i} todo={todo} remove={remove} />)}
      </ul>
    </div>
  );
}

export default TodoItems;
