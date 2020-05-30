import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  width: 100%;
  margin-top: auto;
  padding: 20px 10%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  background-color: #000;
  color: white;

  p {
    padding: 0 2px;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <p>© 2014 - {new Date().getFullYear()} Król Pik.</p>
      <p> Wszystkie prawa zastrzeżone.</p>
    </StyledFooter>
  )
}
export default Footer
