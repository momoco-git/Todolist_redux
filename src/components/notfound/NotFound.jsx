import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  return (
    <Wrap>
      <Container>
        <Header></Header>
        <Todocantainer>
          <p>페이지 경로가 잘못되었습니다</p>
          <button
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
        </Todocantainer>
      </Container>
    </Wrap>
  );
};

export default NotFound;

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
