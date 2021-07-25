import React from "react";
import styled from "styled-components";

function Todo({ todo }) {
  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.complete} />
        {todo.name}
      </label>
    </div>
  );
}

export default Todo;
