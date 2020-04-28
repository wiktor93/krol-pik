import React from "react"
import { graphql } from "gatsby"

import MainLayout from "../components/MainLayout"
import SEO from "../components/atoms/seo"
import Header from "../components/Header"
import BusinessCard from "../components/BusinessCard"
import ContactForm from "../components/ContactForm"
import InteractiveMap from "../components/InteractiveMap"

const ContactPage = ({ data }) => (
  <MainLayout>
    <SEO title="Kontakt" />
    <Header text="Kontakt" img={data.file.childImageSharp.fluid} />

    <BusinessCard />
    <InteractiveMap />
    <ContactForm />
  </MainLayout>
)

export const query = graphql`
  query getContactImage {
    file(name: { eq: "header-contact" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default ContactPage
