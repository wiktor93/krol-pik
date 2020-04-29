import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import MainLayout from "../components/MainLayout"
import SEO from "../components/atoms/seo"
import Header from "../components/Header"
import assetsData from "../assets/data"

const HistorySection = styled.section`
  width: 90%;
  max-width: 600px;
  margin: 50px auto;
  h2 {
    text-align: center;
  }
  p {
    text-align: justify;
  }
`

const StyledImg = styled(Img)`
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`

const AboutPage = ({ data }) => (
  <MainLayout>
    <SEO title="O nas" />
    <Header text="O nas" img={data.header.childImageSharp.fluid} />
    <HistorySection>
      <h2>Nasza historia</h2>
      {assetsData.aboutText}
      <p>Serdecznie Zapraszamy!</p>
      <br />
      <StyledImg fluid={data.shop.childImageSharp.fluid} />
    </HistorySection>
  </MainLayout>
)
export const query = graphql`
  query getAboutImages {
    header: file(name: { eq: "header-about" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    shop: file(name: { eq: "krol-pik-shop" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
export default AboutPage
