import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const StyledHeader = styled.header`
  position: absolute;
  width: 100%;
  height: max-content;
  max-height: calc(100vh - 60px);
  overflow: hidden;
  h1 {
    position: absolute;
    width: 100%;
    bottom: 50px;
    color: white;
    text-transform: uppercase;
    text-align: center;
    text-shadow: 3px 3px 3px #000000;
  }
`

const Header = () => {
  const data = useStaticQuery(headerQuery)
  return (
    <StyledHeader>
      <Img fluid={data.file.childImageSharp.fluid} />
      <h1>Zakręcony salon rowerowy</h1>
    </StyledHeader>
  )
}

const headerQuery = graphql`
  query {
    file(name: { eq: "header-img1" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
