import React from "react";
import { createGlobalStyle } from "styled-components";
import ToDoListContainer from "./components/ToDoListContainer";
import ToDoHead from "./components/ToDoHead";

const GlobalStyle = createGlobalStyle`
body{
  background: #e9ecef;
  display : flex;
  justify-content: center;
  align-content : center;
  box-sizing: border-box;
  
}
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <ToDoListContainer>
        <ToDoHead />
      </ToDoListContainer>
    </>
  );
}

export default App;
