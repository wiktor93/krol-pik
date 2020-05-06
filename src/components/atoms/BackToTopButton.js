import React from "react"
import styled from "styled-components"
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward"

const StyledButton = styled.button`
  position: absolute;
  width: 45px;
  height: 45px;
  right: 50px;
  bottom: 50px;
  border-radius: 50%;
  border: none;
  background-color: black;

  svg {
    fill: white;
  }
`

const BackToTopButton = () => {
  return (
    <StyledButton>
      <ArrowUpwardIcon />
    </StyledButton>
  )
}
export default BackToTopButton
