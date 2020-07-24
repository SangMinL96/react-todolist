import React from "react";
import { createGlobalStyle } from "styled-components";
import ToDoListContainer from "./components/ToDoListContainer";
import ToDoHead from "./components/ToDoHead";
import ToDoListContent from "./components/ToDoListContent";
import ToDoItem from "./components/ToDoCreate";

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
        <ToDoListContent done={true} text={"투두리스크"} />
        <ToDoListContent text={"투두리스크"} />
        <ToDoListContent done={true} text={"투두리스크"} />
        <ToDoListContent text={"투두리스크"} />
        <ToDoItem />
      </ToDoListContainer>
    </>
  );
}

export default App;
