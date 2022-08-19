import React from "react";
import Todo from "../todo/Todo";
import styled from "styled-components";
import { useSelector } from "react-redux";
function List() {
  const todolist = useSelector((state) => state.todo);

  return (
    <List_container>
      <List_title>Working..🤔 </List_title>
      <List_wrapper>
        {todolist.map((x) => {
          if (!x.Done) {
            return <Todo todo={x} key={x.id} />;
          } else {
            return null;
          }
        })}
      </List_wrapper>
      <List_title>Done..! ✔</List_title>
      <List_wrapper>
        {todolist.map((x) => {
          if (x.Done) {
            return <Todo todo={x} key={x.id} />;
          } else {
            return null;
          }
        })}
      </List_wrapper>
    </List_container>
  );
}

export default List;

const List_container = styled.div`
  padding: 0 24px;
`;
const List_wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
const List_title = styled.h2`
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;
