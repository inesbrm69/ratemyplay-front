import React from "react";
import { Auth } from "../../molecules";
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const Authentification = ({ handler, data }) => {
  return (
    <StyledDiv>
      <Auth/>
    </StyledDiv>
  );
};

export default Authentification;