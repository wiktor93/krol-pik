import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import MainLayout from "../layouts/MainLayout"
import Header from "../components/molecules/Header"
import SEO from "../components/molecules/SEO"
import device from "../styles/mediaBreakpoints"
import Button from "../components/atoms/Button"
import HomePageSection from "../components/organisms/HomePageSection"

const HeadingWraper = styled.div`
  position: relative;
  header {
    height: calc(100vh - 60px);
    max-height: none;
  }
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
          <Link to="/sklep">
            <Button>Sprawdź nasz sklep</Button>
          </Link>
        </HeadingBlock>
      </HeadingWraper>

      <HomePageSection />
    </MainLayout>
  )
}

export const query = graphql`
  query getHeroImages {
    mobileImage: file(name: { eq: "hero-mobile" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    desktopImage: file(name: { eq: "hero" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

export default MainPage
