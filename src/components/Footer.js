import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  position: absolute;
  left: 0;
  right: 0;
  height: 60px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: white;
  text-align: center;
`

const Footer = () => {
  return (
    <StyledFooter>
      © 2014-{new Date().getFullYear()} Król Pik. Wszystkie prawa zastrzeżone
    </StyledFooter>
  )
}
export default Footer
