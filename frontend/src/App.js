import React, { useRef, useState } from "react";
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState([])
  const todoRef = useRef()

const handleSubmit = (e) => {
  e.preventDefault()
  const name = todoRef.current.value
  if(name === "") return
  // console.log(name)
  setNewTodo(name)
  console.log(newTodo)
  todoRef.current.value = null

}

  return (
    <>
<ToDoList todos = {todos}/>  
<input type="text"
placeholder="add a todo" 
ref = {todoRef}
/>
<input type="submit" value="add" 
onClick={handleSubmit}
/>
<div>{todos.length} left to do</div>
{/* <div>
{newTodo.map((e) => {
  return(
    console.log(e)
  )
})}
</div> */}

    </>
  );
}

export default App;
