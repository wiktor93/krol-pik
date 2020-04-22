import React, { useState } from "react"
import styled, { createGlobalStyle } from "styled-components"
import { Link } from "gatsby"

import menuOpen from "../assets/icons/menu-open.svg"
import menuClose from "../assets/icons/menu-close.svg"
import logoCrown from "../assets/icons/logo-crown.svg"
import logoInscription from "../assets/icons/logo-krol-pik-rowery.svg"
import Menu from "./Menu"
import DisableScrolling from "../styles/DisableScrolling"

const Nav = styled.nav`
  position: relative;
  padding: 5px 15px;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    height: 100%;
  }
  img {
    margin: 0;
  }
`
const MenuBtn = styled.img`
  height: 30px;
  &:hover {
    cursor: pointer;
  }
`
const Logo = styled.img`
  height: 100%;
`

const NavigationBar = () => {
  const [menuToogle, setMenuToogle] = useState(false)

  return (
    <Nav>
      <DisableScrolling condition={menuToogle} />

      <Link to="/">
        <Logo src={logoCrown} alt="main-logo" />
      </Link>

      <Link to="/">
        <Logo src={logoInscription} alt="main-logo" />
      </Link>

      <Menu condition={menuToogle} />

      <MenuBtn
        src={menuToogle ? menuClose : menuOpen}
        alt="menu-button"
        onClick={() => setMenuToogle(!menuToogle)}
      />
    </Nav>
  )
}

export default NavigationBar
