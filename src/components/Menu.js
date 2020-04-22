import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import menuElements from "../assets/menuElements"

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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  li {
    padding: 10px 0;
    font-weight: 600;
    a {
      text-decoration: none;
      color: inherit;
    }
  }
`

const Menu = ({ condition }) => {
  return condition ? (
    <StyledMenu>
      {menuElements.map((el, i) => (
        <li key={i}>
          <Link to={el.path}>{el.name}</Link>
        </li>
      ))}
    </StyledMenu>
  ) : null
}
export default Menu
