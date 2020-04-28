import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import menuElements from "../assets/menuElements"
import device from "../styles/mediaBreakpoints"
import useScreenResize from "../utils/useScreenResize"

const StyledMenu = styled.ul`
  margin: 0;
  position: absolute;
  z-index: 1;
  top: 100%;
  left: 0;
  right: 0;
  height: calc(100vh - 100%);
  list-style: none;
  background-color: #fff;
  display: ${({ changeDisplay }) => (changeDisplay ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  li {
    padding: 20px 15px;
    font-weight: 600;
  }

  @media ${device.laptop} {
    position: static;
    height: 100%;
    display: flex;
    flex-direction: row;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: 0.25s;
  &:hover {
    color: rgba(0, 0, 0, 0.5);
  }
  &.active {
    color: rgba(0, 0, 0, 0.5);
  }
`

const Menu = ({ menuToogle, setMenuToogle }) => {
  useScreenResize(menuToogle, setMenuToogle)
  return (
    <StyledMenu changeDisplay={menuToogle}>
      {menuElements.map((el, i) => (
        <li key={i}>
          <StyledLink to={el.path} activeClassName="active">
            {el.name}
          </StyledLink>
        </li>
      ))}
    </StyledMenu>
  )
}
export default Menu
