import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const StyledHeader = styled.header`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 50vh;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  .gatsby-image-wrapper {
    height: 100%;
    width: 100%;
  }

  h1 {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin: 0;
    padding: 0px 5%;
    width: 100%;
    color: white;
    text-transform: uppercase;
    text-align: center;
    text-shadow: 3px 3px 3px #000000;
  }
`

const Header = ({ img, text = "" }) => {
  return (
    <StyledHeader>
      <Img fluid={img} />
      <h1>{text}</h1>
    </StyledHeader>
  )
}

export default Header
