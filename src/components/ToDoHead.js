import React from "react";
import styled from "styled-components";

const ToDoHeadcontent = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 20px;
  font-weight: bold;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin-bottom: 1px;
  }
  .day {
    color: #868e96;
    font-size: 0.9rem;
  }
  .todocount {
    color: #51cf66;
    margin-top: 20px;
  }
`;
function ToDoHead() {
  return (
    <ToDoHeadcontent>
      <h1>2020년 7월 23일</h1>
      <div className="day">일요일</div>
      <div className="todocount">할 일 3개 남음</div>
    </ToDoHeadcontent>
  );
}

export default ToDoHead;
