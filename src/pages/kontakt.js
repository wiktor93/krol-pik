import React from "react"
import { Link } from "gatsby"

import MainLayout from "../components/MainLayout"
import SEO from "../components/seo"

const ContactPage = () => (
  <MainLayout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </MainLayout>
)

export default ContactPage
