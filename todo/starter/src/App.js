
import { useState } from "react";
import AddTodo from "./components/AddTodo";
import ListTodo from "./components/LisTTodo";

const App = () => {
  const [todos, setTodo] = useState([]);

  const removeFn = (id) => {
    const arr = todos.filter(todo => todo?.id !== id);
    setTodo(arr);
  }

  const checkedFn = (id) => {
    const arr = [];
    todos.forEach(todo => {
      if (todo.id === id){
        arr.push({...todo, checked: !todo.checked});
      }else{
        arr.push(todo);
      }
    })
    setTodo(arr);
    console.log(arr);
  }

  return (
    <div className="app">
      <AddTodo todos={todos} setTodo={setTodo} />
      <ListTodo todos={todos} remove={removeFn} checked={checkedFn} />
    </div>
  );
}

export default App;
