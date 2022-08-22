import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();
  const param = useParams();
  const todo = useSelector((state) => state.todo);

  const thistodo = todo.filter((x) => {
    return x.id === parseInt(param.id);
  });

  return (
    <Wrap>
      <Container>
        <Header>
          <p>id : {thistodo[0].id}</p>
          <button
            onClick={() => {
              navigate(-1);
            }}
          >
            뒤로가기
          </button>
        </Header>
        <Todocantainer>
          <h2>{thistodo[0].title}</h2>
          <p>{thistodo[0].todoDesc}</p>
        </Todocantainer>
      </Container>
    </Wrap>
  );
};

export default Detail;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 60%;
  border: 2px solid blueviolet;
  border-radius: 40px;
  min-height: 400px;
  max-height: 800px;
`;

const Header = styled.div`
  width: 80%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  margin: auto;

  button {
    border: 1px solid blueviolet;
    background-color: transparent;
    font-size: 1.5em;
    border-radius: 20px;
    height: 70%;
    margin: auto 0;
  }
  p {
    font-size: 1.5em;
  }
`;

const Todocantainer = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;
