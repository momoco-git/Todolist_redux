import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <Header_bar>
      <p>My Todo List</p>
      <p>React</p>
    </Header_bar>
  );
};

export default Header;

const Header_bar = styled.div`
  align-items: center;
  
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 0 20px;
`;
