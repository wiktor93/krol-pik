import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import MainLayout from "../layouts/MainLayout"
import SEO from "../components/molecules/SEO"
import Header from "../components/molecules/Header"
import Button from "../components/atoms/Button"

const Section = styled.section`
  margin: 25px auto;
  width: 90%;
  max-width: 520px;
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 10px;
  }
  ul {
    margin: 5px 0 10px 25px;
    list-style-type: disc;
    li {
      padding: 3px;
    }
  }
`

const ServiceRangePage = ({ data }) => (
  <MainLayout>
    <SEO title="Zakres usług" />
    <Header text="Zakres usług" img={data.file.childImageSharp.fluid} />

    <Section>
      <h2>Sprzedaż</h2>
      <ul>
        <li>Rowery</li>
        <li>Części</li>
        <li>Akcesoria</li>
        <li>Odzież sportowa</li>
      </ul>
      <Link to="/sklep">
        <Button> Odwiedź sklep </Button>
      </Link>
    </Section>

    <Section>
      <h2>Serwis</h2>
      <ul>
        <li>
          Podstawowy przegląd roweru
          <ul>
            <li>Regulacja przerzutek</li>
            <li>Regulacja hamulców</li>
            <li>Czyszczenie i smarowanie napędu</li>
            <li>Dokręcanie połączeń śrubowych</li>
          </ul>
        </li>
        <li>
          Kompleksowy przegląd roweru
          <ul>
            <li>Regulacja przerzutek</li>
            <li>Regulacja hamulców</li>
            <li>Czyszczenie i smarowanie: napędu, sterów, suportu, piast</li>
            <li>Likwidacja luzów</li>
            <li>Dokręcanie połączeń śrubowych</li>
            <li>Centrowanie kół</li>
          </ul>
        </li>
      </ul>
      <Link to="/kontakt">
        <Button>Umów się na serwis</Button>
      </Link>
    </Section>
  </MainLayout>
)

export const query = graphql`
  query getServicesImage {
    file(name: { eq: "header-services" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default ServiceRangePage
