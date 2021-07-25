import React from "react";
import Todo from "./Todo";
import styled from "styled-components";

function ToDoList({ todos }) {
  return todos.map((todo) => {
    return <Todo key={todo.id} todo={todo} />;
  });
}

export default ToDoList;
