import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  height: ${({ height }) => (height ? height : "45px")};
  padding: 0 25px;
  border: 1px solid black;
  background-color: ${props => (props.secondary ? "#fff" : "#000")};
  color: ${props => (props.secondary ? "#000" : "#fff")};
  font-weight: 600;
  font-family: inherit;
  font-size: inherit;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    display: block;
    margin-right: 10px;
    height: 24px;
    width: 20px;
    fill: ${props => (props.secondary ? "#000" : "#fff")};
    transition: 0.3s;
  }

  &:hover {
    cursor: pointer;
    background-color: ${props => (props.secondary ? "#000" : "#fff")};
    color: ${props => (props.secondary ? "#fff" : "#000")};
    svg {
      filter: invert(1);
    }
  }
`

const Button = props => {
  const { children, secondary, SVGPath, height } = props
  return (
    <StyledButton secondary={secondary} height={height} {...props}>
      {SVGPath && (
        <svg>
          <path d={SVGPath}></path>
        </svg>
      )}
      <span>{children}</span>
    </StyledButton>
  )
}

export default Button
