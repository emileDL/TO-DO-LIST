import React, { useState } from "react";
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState([])

const handleSubmit = () => {}

  return (
    <>
<ToDoList todos = {todos}/>  
<input type="text"
placeholder="add a todo" />
<input type="submit" value="add" 
onClick={handleSubmit}
/>
<div>{todos.length} left to do</div>
    </>
  );
}

export default App;
