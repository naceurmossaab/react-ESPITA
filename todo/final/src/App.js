import './App.css';
import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoItems from './components/TodoItems';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodoFN = (text) => {
    const id = todos.length;
    setTodos([...todos, { id, text }]);
  }

  const removeFN = (removeId) => {
    const data = todos.filter(todo => todo.id !== removeId);
    setTodos(data);
  }


  return (
    <div className="app">
      <TodoInput addTodoFN={addTodoFN} />
      <TodoItems todos={todos} remove={removeFN} />
    </div>
  );

}

export default App;
