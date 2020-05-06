import React from "react"
import styled from "styled-components"

import { InputMixin } from "../../styles/styledMixins"

const Wraper = styled.div`
  ${InputMixin}
  height:45px;
  display: flex;
  align-items: center;
  font-weight: 600;
`

const StyledSelect = styled.select`
  height: 100%;
  width: 100%;
  font-weight: inherit;
  border: none;
  font-family: inherit;
  font-size: inherit;

  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`
const Select = () => {
  return (
    <Wraper>
      <div>Sortuj: </div>
      <StyledSelect id="cars" placeholder="test">
        {/* <option value="" disabled selected hidden>
        Sortuj
      </option> */}
        <option value="ASC">cena: od najniższej</option>
        <option value="DESC">cena: od najwyższej</option>
        <option value="latest" selected>
          od najnowszych
        </option>
        <option value="a-z">alfabetycznie: a-z</option>
        <option value="z-a">alfabetycznie: z-a</option>
      </StyledSelect>
    </Wraper>
  )
}
export default Select
