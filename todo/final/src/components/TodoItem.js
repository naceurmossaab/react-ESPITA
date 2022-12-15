import React, { useState } from 'react';

const Todo = ({ todo, remove }) => {
  const [finished, setFinished] = useState(false);
  return (
    <div className="item">
      <div className="checkbox">
        <span>
          <input type="checkbox" onChange={() => setFinished(!finished)} />
        </span>
        <li className={finished && "line"} id={todo.id} value={todo.text}>{todo.text}</li>
      </div>
      <span> <button onClick={() => remove(todo.id)}>remove</button> </span>
    </div>
  );

}

export default Todo
