import { useState } from 'react';
import '../App.css'

const AddTodo = ({todos, setTodo}) => {
  const [todoInput, setTodoInput] = useState('');

  const addFN = () => {
    if(todoInput !== ""){
      setTodo([{id: todos.length, value: todoInput, checked: false}, ...todos]);
      setTodoInput('');
    }
  }

    return(
    <div className="todo">
      <h1>Todo</h1>
      <div>
      <input className="todo-input" type="text" value={todoInput} onChange={(e)=>setTodoInput(e.target.value)} />
      <button className={todoInput !== "" ? "todo-btn" : "todo-btn disabled"} onClick={()=>addFN()}>Add</button>
      </div>
    </div>
  );

}
export default AddTodo;