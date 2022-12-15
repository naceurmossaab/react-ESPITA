import React, { useState } from 'react';

const TodoInput = ({ addTodoFN }) => {
  const [todo, setTodo] = useState('');

  return (
    <div className="todo">
      <h1>My Todos</h1>
      <div>
        <input className="todo-input" placeholder="add todo here..." value={todo} onChange={(e) => setTodo(e.target.value)} type="text" />
        <input className={!todo.length ? "todo-btn disabled" : "todo-btn"} onClick={() => { addTodoFN(todo); setTodo(''); }} type="button" value="add" disabled={!todo.length} />
      </div>
    </div>
  );
}

export default TodoInput;
