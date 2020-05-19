import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { ThemeProvider } from "@material-ui/core/styles"

import GlobalStyles from "../styles/GlobalStyles"
import muiTheme from "../styles/muiTheme"
import NavigationBar from "../components/organisms/NavigationBar"
import Footer from "../components/molecules/Footer"
import NotificationPupUp from "../components/atoms/NotificationPopUp"

const Wraper = styled.div`
  min-height: 101vh;
`

const MainLayout = ({ children }) => {
  return (
    <Wraper>
      <ThemeProvider theme={muiTheme}>
        <GlobalStyles />
        <NavigationBar />

        <main>{children}</main>

        <Footer />
        <NotificationPupUp />
      </ThemeProvider>
    </Wraper>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
