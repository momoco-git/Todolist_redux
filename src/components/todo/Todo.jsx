import React from "react";

import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../redux/modules/todoSlice";
import styled from "styled-components";
import {useNavigate } from "react-router-dom";

function Todo({ todo }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <TodoContainer>
      <div>
        <Detailgo
          onClick={() => {
            navigate("/detail/" + todo.id);
          }}
        >
          자세히 보기
        </Detailgo>
        <Todotitle>{todo.title}</Todotitle>
        <div>{todo.todoDesc}</div>
      </div>
      <Btnset>
        <Btn_delete onClick={() => dispatch(deleteTodo(todo.id))}>
          삭제하기
        </Btn_delete>
        <Btn_complete onClick={() => dispatch(updateTodo(todo.id))}>
          {todo.Done ? "취소" : "완료"}
        </Btn_complete>
      </Btnset>
    </TodoContainer>
  );
}

export default Todo;

const Detailgo = styled.p`
  color: blueviolet;
`;

const TodoContainer = styled.div`
  border: 4px solid teal;
  border-radius: 12px;
  padding: 12px 24px 24px;
  width: 270px;
`;
const Todotitle = styled.h2`
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;
const Btnset = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`;

const Btn_delete = styled.button`
  border: none;
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 50%;
  background-color: #fff;
  border: 2px solid red;
`;
const Btn_complete = styled.button`
  border: none;
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 50%;
  background-color: #fff;
  border: 2px solid green;
`;
