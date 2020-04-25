import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const navHeight = "60px"

const StyledHeader = styled.header`
  position: relative;
  width: 100%;
  height: max-content;
  max-height: calc(100vh - ${navHeight});
  overflow: hidden;
  h1 {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 0px 5%;
    width: 100%;
    color: white;
    text-transform: uppercase;
    text-align: center;
    text-shadow: 3px 3px 3px #000000;
  }
`

const Header = ({ img, text = "" }) => {
  const data = useStaticQuery(headerQuery)
  return (
    <StyledHeader>
      <Img fluid={img ? img : data.file.childImageSharp.fluid} />
      <h1>{text}</h1>
    </StyledHeader>
  )
}

const headerQuery = graphql`
  query {
    file(name: { eq: "hero-mobile" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Header
