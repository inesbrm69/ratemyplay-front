import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
    ${(props) => props.color ? 'color: '+ props.color + " ; " : "color: #3FA9F9; " };
    ${(props) => props.fontSize ? 'font-size: '+ props.fontSize + " ; " : "font-size: 48px; " };
    ${(props) => props.fontFamily ? 'font-family: '+ props.fontFamily + " ; " : "font-family: 'MADE Soulmaze', sans-serif; " };
    ${(props) => props.margin ? 'margin: '+ props.margin + " ; " : "margin: auto;" };
    ${(props) => props.textAlign ? 'text-align: '+ props.textAlign + " ; " : "text-align: left;" };
    text-decoration: none;

`;

const Link = ({ text = "", ...props })  => {
  return (
    <StyledLink {...props}>
      {props.children}
    </StyledLink>
  );
}

export default Link;
