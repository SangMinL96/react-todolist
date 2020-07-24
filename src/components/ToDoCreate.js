import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";
import { useTodoDispatch, useNextId } from "./TodoContext";

const CreateIcon = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  font-size: 2.2rem;
  font-weight: bold;
  background-color: green;
  color: white;
  transition: 0.2s all ease-in;
  z-index: 5;

  cursor: pointer;
  ${(props) =>
    props.open &&
    css`
      background-color: #ff6b6b;
      &:hover {
        background-color: #ff8787;
      }
      &:active {
        background-color: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `};
`;
const Form = styled.form``;
const TodoInput = styled.input`
  position: absolute;
  height: 40px;
  width: 90%;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  outline: none;
  border: none;
  background-color: #576574;

  opacity: 0;
  transition: 0.5s all ease-in;
  color: white;
  font-size: 1.03rem;
  padding-left: 1em;
  padding-right: 1em;
  box-shadow: 0 0 5px rgba(0, 0, 0.04);

  ${(props) =>
    props.open &&
    css`
      left: 50%;
      bottom: 80px;
      transform: translate(-50%, 50%);
      opacity: 1;
      border-radius: 30px;
      width: 70%;
      &::placeholder {
        color: white;
        font-size: 1.03rem;
      }
    `};
`;
function ToDoItem() {
  const nextId = useNextId();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const disPatch = useTodoDispatch();
  const onChange = (e) => setValue(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    disPatch({
      type: "CREATE",
      todo: {
        id: nextId.current,
        text: value,
        done: false,
      },
    });
    setValue("");
    setOpen(false);
    nextId.current += 1;
  };
  const onToggle = () => setOpen(!open);
  return (
    <>
      <CreateIcon onClick={onToggle} open={open}>
        <MdAdd />
      </CreateIcon>
      <Form onSubmit={onSubmit}>
        <TodoInput
          placeholder="할 일을 입력후, Enter를 누르세요."
          open={open}
          autoFocus
          onChange={onChange}
        />
      </Form>
    </>
  );
}

export default ToDoItem;
