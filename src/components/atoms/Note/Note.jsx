import React from 'react';
import logo from "../../../img/Logo RMP.png";
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  color: white;
`;

const Note = ({ text }) => {
  return (
    <StyledDiv>
      {text && <span>{text}</span>}
    </StyledDiv>
  );
}

export default Note;
