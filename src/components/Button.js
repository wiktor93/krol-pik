import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  height: 45px;
  padding: 0 25px;
  border: 1px solid white;
  background-color: #000;
  color: white;
  font-weight: 600;
  font-family: inherit;
  font-size: inherit;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    border: 1px solid black;
    background-color: #fff;
    color: black;
  }
`

const Button = props => {
  return <StyledButton {...props}>{props.children}</StyledButton>
}

export default Button
