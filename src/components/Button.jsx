import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
  display: inline-block;
  padding: 0.6em 1.2em;
  margin: 0 0.3em 0.3em 0;
  border-radius: 2em;
  box-sizing: border-box;
  text-decoration: none;
  background-color: var(--main);
  font-family: inherit;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: var(--main-hover);
  }
  & svg {
    vertical-align: text-top;
  }
`;

const Button = ({ children, onClick }) => (
  <StyledButton onClick={onClick}>
    {children}
  </StyledButton>
);

export default Button;
