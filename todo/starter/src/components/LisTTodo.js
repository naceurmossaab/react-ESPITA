import Todo from "./Todo";
const ListTodo = ({todos, remove, checked}) => {

  return(
    <div>
      <ul>
        {
          todos.map((todo, index) =><Todo key={index} item={todo} remove={remove} checked={checked} />)
        }
      </ul>
    </div>
  );
}

export default ListTodo;