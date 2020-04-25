import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Menu from "./Menu"
import menuOpen from "../assets/icons/menu-open.svg"
import menuClose from "../assets/icons/menu-close.svg"
import logo from "../assets/icons/krol-pik-logo-full.svg"
import DisableScrolling from "../styles/DisableScrolling"
import device from "../styles/mediaBreakpoints"

const Nav = styled.nav`
  position: relative;
  padding: 5px 15px;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const MenuBtn = styled.img`
  height: 30px;
  &:hover {
    cursor: pointer;
  }
  @media ${device.laptop} {
    display: none;
  }
`

const Logo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 50px;
`

const NavigationBar = () => {
  const [menuToogle, setMenuToogle] = useState(false)

  return (
    <Nav>
      <DisableScrolling condition={menuToogle} />

      <Link to="/">
        <Logo src={logo} alt="main-logo" />
      </Link>

      <Menu menuToogle={menuToogle} setMenuToogle={setMenuToogle} />

      <MenuBtn
        src={menuToogle ? menuClose : menuOpen}
        alt="menu-button"
        onClick={() => setMenuToogle(!menuToogle)}
      />
    </Nav>
  )
}

export default NavigationBar
