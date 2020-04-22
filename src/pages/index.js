import React from "react"
import { Link } from "gatsby"

import MainLayout from "../components/MainLayout"
import Header from "../components/Header"
import SEO from "../components/seo"

const MainPage = () => (
  <MainLayout>
    <SEO title="Home" />

    <Header />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/kontakt/">Go to page 2</Link>
  </MainLayout>
)

export default MainPage
