import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import GlobalStyles from "../styles/GlobalStyles"
import NavigationBar from "./NavigationBar"
import Footer from "./Footer"

const Wraper = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  main {
    min-height: calc(100vh - 120px);
  }
`

const MainLayout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <Wraper>
      <GlobalStyles />
      <NavigationBar />

      <main>{children}</main>

      <Footer />
    </Wraper>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
