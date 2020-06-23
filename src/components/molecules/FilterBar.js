import React from "react"
import styled from "styled-components"
import { Collapse } from "@material-ui/core"
import { connect } from "react-redux"

import Button from "../atoms/Button"
import ExpansionButton from "../atoms/ExpansionButton"
import { filter, trashCan } from "../../assets/SVGIconPaths"
import PriceRangeSlider from "../atoms/PriceRangeSlider"
import ManufacturerCheckbox from "../molecules/ManufacturerCheckbox"
import { border1Mixin } from "../../styles/styledMixins"
import {
  setFilterBarExpansion,
  setCheckedManufacturers,
  setPriceRange,
} from "../../redux/actions"

const CollapseContentWraper = styled.div`
  ${border1Mixin}
  border-top:unset;
  display: grid;
  grid-row-gap: 25px;
  padding: 8px 16px;
  button {
    ${border1Mixin};
  }
`

const FilterBar = props => {
  const {
    isOpen,
    setFilterBarExpansion,
    setPriceRange,
    checkedManufacturers,
    setCheckedManufacturers,
    maxPrice,
  } = props

  const handleClick = () => {
    const clearedManufacturersObject = {}
    for (const key in checkedManufacturers) {
      clearedManufacturersObject[key] = false
    }
    setCheckedManufacturers(clearedManufacturersObject)
    setPriceRange([0, maxPrice])
  }

  return (
    <div>
      <ExpansionButton
        iconPath={filter}
        onClick={() => setFilterBarExpansion(!isOpen)}
        condition={isOpen}
      >
        Filtruj
      </ExpansionButton>

      <Collapse in={isOpen} timeout="auto">
        <CollapseContentWraper>
          <PriceRangeSlider />
          <ManufacturerCheckbox />
          <Button secondary SVGPath={trashCan} onClick={handleClick}>
            Wyczyść filtry
          </Button>
        </CollapseContentWraper>
      </Collapse>
    </div>
  )
}
const mapStateToProps = ({ filterBar, maxPrice }) => ({
  isOpen: filterBar.isOpen,
  checkedManufacturers: filterBar.checkedManufacturers,
  maxPrice,
})

export default connect(mapStateToProps, {
  setFilterBarExpansion,
  setCheckedManufacturers,
  setPriceRange,
})(FilterBar)
