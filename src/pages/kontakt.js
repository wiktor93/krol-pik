import React from "react"
import { graphql } from "gatsby"

import MainLayout from "../layouts/MainLayout"
import SEO from "../components/molecules/SEO"
import Header from "../components/molecules/Header"
import BusinessCard from "../components/molecules/BusinessCard"
import InteractiveMap from "../components/molecules/InteractiveMap"
import ContactForm from "../components/molecules/ContactForm"

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
