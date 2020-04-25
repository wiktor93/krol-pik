import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import MainLayout from "../components/MainLayout"
import Header from "../components/Header"
import SEO from "../components/seo"
import device from "../styles/mediaBreakpoints"
import Button from "../components/Button"

const HeadingWraper = styled.div`
  position: relative;
`
const HeadingBlock = styled.div`
  position: absolute;
  width: 100%;
  bottom: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    padding: 0px 5% 10px;
    width: 100%;
    text-transform: uppercase;
    text-align: center;
    color: white;
    text-shadow: 3px 3px 3px #000000;
  }
  /* p {
    font-size: 15px;
    color: white;
    text-shadow: 3px 3px 3px #000000;
    padding-bottom: 10px;
  } */
  button {
    margin-top: 10px;
  }
  @media ${device.tablet} {
    width: 60%;
    bottom: 50%;
    transform: translateY(50%);
  }
`

const MainPage = ({ data }) => {
  const imgSources = [
    data.mobileImage.childImageSharp.fluid,
    { ...data.desktopImage.childImageSharp.fluid, media: device.tablet },
  ]

  return (
    <MainLayout>
      <SEO title="Home" />

      <HeadingWraper>
        <Header img={imgSources} />
        <HeadingBlock>
          <h1>Zakręcony salon rowerowy</h1>
          {/* <p>Rowery, części, akcesoria, serwis</p> */}
          <Button>Sprawdź nasz sklep</Button>
        </HeadingBlock>
      </HeadingWraper>

      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
    </MainLayout>
  )
}

export const query = graphql`
  query getHeroImages {
    mobileImage: file(name: { eq: "hero-mobile" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    desktopImage: file(name: { eq: "hero" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default MainPage
