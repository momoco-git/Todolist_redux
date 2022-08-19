import React, { useState } from "react";
import styled from "styled-components";
import { createTodo } from "../../redux/modules/todo";
import { useDispatch } from "react-redux";
let number = 3;
const Form = (props) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDesc, setTodoDesc] = useState("");
  const dispatch = useDispatch();
  const resetForm = () => {
    setTodoTitle("");
    setTodoDesc("");
  };
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
      createTodo({
        id: number + 1,
        Done: false,
        title: todoTitle,
        todoDesc: todoDesc,
      })
    );
    number++;
    resetForm();
  };

  return (
    <Form_ onSubmit={onSubmit} Form_>
      <Input_group>
        <Label>제목</Label>{" "}
        <Input_
          type="text"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <Label>내용</Label>{" "}
        <Input_
          type="text"
          value={todoDesc}
          onChange={(e) => setTodoDesc(e.target.value)}
        />
      </Input_group>
      <div>
        <Add_btn type="submmit">추가하기</Add_btn>
      </div>
    </Form_>
  );
};

export default Form;
const Form_ = styled.form`
  display: flex;
  background-color: #eee;
  border-radius: 12px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 30px;
`;

const Input_group = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
`;
const Input_ = styled.input`
  border: none;
  border-radius: 12px;
  height: 40px;
  padding: 0 12px;
  width: 240px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
`;
const Add_btn = styled.button`
  background-color: teal;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-weight: 700;
  height: 40px;
  width: 140px;
`;
