import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Section = styled.section`
  width: 90%;
  max-width: 600px;
  margin: 50px auto 0;
  text-align: center;
  h2 {
    margin-top: 50px;
  }
  p {
    margin-bottom: 15px;
  }
`

const StyledImg = styled(Img)`
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`

const HomePageSection = () => {
  const data = useStaticQuery(getImages)

  return (
    <>
      <Section>
        <h2>Przerzuć się na rower!</h2>
        <p>
          W zdrowym ciele zdrowy duch. Zapraszamy do zapoznania się z ofertą na
          naszej stronie lub odwiedzenia sklepu stacjonarnego.
        </p>
        <StyledImg fluid={data.cycleRoute.childImageSharp.fluid} />

        <h2>Poczuj przyjemność z jazdy!</h2>
        <p>
          Spraw sobie lub bliskiej osobie prezent. Przekonaj się, ile
          przyjemności może sprawić wspólna przejażdżka na rowerze.
        </p>
        <StyledImg fluid={data.peopleCycling.childImageSharp.fluid} />
      </Section>
    </>
  )
}

const getImages = graphql`
  query getSectionImages {
    cycleRoute: file(name: { eq: "cycle-route" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    peopleCycling: file(name: { eq: "city-bike-2" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default HomePageSection
