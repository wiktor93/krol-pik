import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Menu from "../molecules/Menu"
import logo from "../../assets/icons/krol-pik-logo-full.svg"
import DisableScrolling from "../../styles/DisableScrolling"
import MenuButton from "../atoms/MenuButton"

const Wraper = styled.div`
  width: 100%;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.08),
    0px 2px 4px 0px rgba(0, 0, 0, 0.08);
`

const Nav = styled.nav`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  height: 60px;
  padding: 5px 15px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
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
    <Wraper>
      <Nav>
        <DisableScrolling condition={menuToogle} />

        <Link to="/">
          <Logo src={logo} alt="main-logo" />
        </Link>

        <Menu menuToogle={menuToogle} setMenuToogle={setMenuToogle} />

        <MenuButton menuToogle={menuToogle} setMenuToogle={setMenuToogle} />
      </Nav>
    </Wraper>
  )
}

export default NavigationBar
