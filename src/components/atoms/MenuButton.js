import React from "react"
import styled from "styled-components"
import menuOpen from "../../assets/icons/menu-open.svg"
import menuClose from "../../assets/icons/menu-close.svg"
import device from "../../styles/mediaBreakpoints"

const MenuBtn = styled.img`
  height: 30px;
  &:hover {
    cursor: pointer;
  }
  @media ${device.laptop} {
    display: none;
  }
`

const MenuButton = ({ menuToogle, setMenuToogle }) => {
  return (
    <MenuBtn
      src={menuToogle ? menuClose : menuOpen}
      alt="menu-button"
      onClick={() => setMenuToogle(!menuToogle)}
    />
  )
}
export default MenuButton
