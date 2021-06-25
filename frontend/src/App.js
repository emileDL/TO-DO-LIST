import React, { useRef, useState, useEffect } from "react";
import ToDoList from "./components/ToDoList";
import uuidv4 from "uuid/dist"

const LOCAL_STORAGE_KEY = "todoApp.todos"

function App() {
  const [todos, setTodos] = useState([])
  // const [newTodo, setNewTodo] = useState([])
  const todoRef = useRef()

useEffect(() =>{
const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY)
  if (storedTodos) setTodos(storedTodos)
}, [])

useEffect(() => {
localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
}, [todos])


const handleSubmit = (e) => {
  e.preventDefault()
  const name = todoRef.current.value
  if(name === "") return
  console.log(name)
  // setNewTodo(name)
  // console.log(newTodo)
  setTodos(prevTodos => {
    return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
  })
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
