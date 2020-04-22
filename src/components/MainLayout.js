import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import GlobalStyles from "../styles/GlobalStyles"
import NavigationBar from "./NavigationBar"

const Wraper = styled.div`
  margin: 0 auto;
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
      <div>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </Wraper>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
