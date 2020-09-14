import React from "react";
import styled from "styled-components";
import ToDoListContent from "./ToDoListContent";
import { useTodoState } from "./TodoContext";

const TodoListBlock = styled.div`
  flex: 1;
  overflow-y: auto;
`;
function TodoList() {
  const todos = useTodoState();
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <ToDoListContent
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
