import React from "react";
import styled from "styled-components";

const Layout = (props) => {
  return <Layoutline>{props.children}</Layoutline>;
};

export default Layout;

const Layoutline = styled.div`
  max-width: 1200px;
  min-width: 800px;
 
  margin: auto;
`;
