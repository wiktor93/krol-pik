import React from "react"
import { graphql } from "gatsby"

import MainLayout from "../components/MainLayout"
import SEO from "../components/seo"
import Header from "../components/Header"

const ServiceRangePage = ({ data }) => (
  <MainLayout>
    <SEO title="Zakres usług" />
    <Header text="Zakres usług" img={data.file.childImageSharp.fluid} />
    <h1>ServiceRangePage</h1>
    <p>Welcome to ServiceRangePage</p>
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
