import React from "react"
import styled from "styled-components"

import { border1Mixin } from "../../styles/styledMixins"

const Wraper = styled.div`
  ${border1Mixin}
  padding: 8px 16px;
  border-top: unset;
`

const ExpansionDrawer = ({ children }) => {
  return <Wraper>{children}</Wraper>
}
export default ExpansionDrawer
