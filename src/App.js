import React from "react";
import { createGlobalStyle } from "styled-components";
import ToDoListContainer from "./components/ToDoListContainer";
import ToDoHead from "./components/ToDoHead";

import ToDoItem from "./components/ToDoCreate";
import { TodoProvider } from "./components/TodoContext";
import TodoList from "./components/TodoList";

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
    <TodoProvider>
      <GlobalStyle />
      <ToDoListContainer>
        <ToDoHead />
        <TodoList />
        <ToDoItem />
      </ToDoListContainer>
    </TodoProvider>
  );
}

export default App;
