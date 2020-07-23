import React from "react";
import styled from "styled-components";

const TodoContainer = styled.div`
  background: white;
  border-radius: 20px;
  margin-top: 3em;
  width: 512px;
  height: 768px;
  position: relative;
  box-shadow: 0 0 8px rgba(0, 0, 0.04);
`;
function ToDoListContainer({ children }) {
  return (
    <div>
      <TodoContainer>{children}</TodoContainer>
    </div>
  );
}

export default ToDoListContainer;
