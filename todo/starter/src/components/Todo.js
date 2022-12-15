const Todo = (props) => {
  console.log(props.item.checked);
  return (
    <div className="item">
      <div className="checkbox">
        <span>
          <input className={props.item.checked ? "line" : ""} type="checkbox" name="" id="" onChange={()=>props.checked(props.item.id)}  />
        </span>
        <li>
          {props.item.value}
        </li>
      </div>
      <span>
        <button onClick={()=>props.remove(props.item.id)}>remove</button>
      </span>
    </div>
  )
}

export default Todo;