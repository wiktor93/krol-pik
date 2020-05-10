import React from "react"
import styled from "styled-components"
import { SvgIcon } from "@material-ui/core"
import { ExpandLess, ExpandMore } from "@material-ui/icons"

import { border1Mixin } from "../../styles/styledMixins"

const StyledButton = styled.button`
  ${border1Mixin}
  height: 45px;
  width: 100%;
  padding: 0 25px;
  font-weight: 600;
  font-family: inherit;
  font-size: inherit;
  transition: 0.3s;
  display: flex;
  justify-content: left;
  align-items: center;
  background-color: #fff;

  span {
    margin: 0 10px;
    flex-grow: 1;
    text-align: left;
  }
`

const ExpansionButton = ({ children, iconPath, condition, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <SvgIcon>
        <path d={iconPath} />
      </SvgIcon>
      <span>{children}</span>
      {condition ? <ExpandLess /> : <ExpandMore />}
    </StyledButton>
  )
}
export default ExpansionButton
