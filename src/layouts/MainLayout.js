import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import GlobalStyles from "../styles/GlobalStyles"
import NavigationBar from "../components/organisms/NavigationBar"
import Footer from "../components/molecules/Footer"

const Wraper = styled.div`
  min-height: 100vh;
`

const MainLayout = ({ children }) => {
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
