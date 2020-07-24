import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";

const CheckIcon = styled.div`
  font-size: 1.7rem;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;
const ContentText = styled.div`
  margin-right: 14em;
  font-size: 1.1rem;
  font-weight: bold;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;
const ContentDelete = styled.div`
  font-size: 1.5rem;
  color: #dee2e6;
  cursor: pointer;
  opacity: 0;
  &:hover {
    color: red;
  }
`;
const ContentList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 25px;
  &:hover {
    ${ContentDelete} {
      opacity: 1;
    }
  }
`;

function ToDoListContent({ id, done, text }) {
  return (
    <ContentList>
      <CheckIcon done={done}>{done && <MdDone />}</CheckIcon>
      <ContentText done={done}>{text}</ContentText>
      <ContentDelete>
        <MdDelete />
      </ContentDelete>
    </ContentList>
  );
}

export default ToDoListContent;
