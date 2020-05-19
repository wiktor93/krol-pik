import React from "react"
import styled from "styled-components"
import { Collapse } from "@material-ui/core"
import { connect } from "react-redux"

import Button from "../atoms/Button"
import ExpansionButton from "../atoms/ExpansionButton"
import { filter, trashCan, checkMark } from "../../assets/SVGIconPaths"
import RangeSlider from "../atoms/RangeSlider"
import ManufacturerCheckbox from "../molecules/ManufacturerCheckbox"
import { border1Mixin } from "../../styles/styledMixins"
import { updateFilterBar } from "../../redux/actions"

const CollapseContentWraper = styled.div`
  ${border1Mixin}
  border-top:unset;
  display: grid;
  grid-row-gap: 25px;
  padding: 8px 16px;
`

const FilterBar = ({ filterBar, updateFilterBar }) => {
  const { isOpen } = filterBar
  return (
    <div>
      <ExpansionButton
        iconPath={filter}
        onClick={() => updateFilterBar(!isOpen)}
        condition={isOpen}
      >
        Filtruj
      </ExpansionButton>

      <Collapse in={isOpen} timeout="auto">
        <CollapseContentWraper>
          <RangeSlider />
          <ManufacturerCheckbox />
          <Button secondary SVGPath={trashCan}>
            Wyczyść
          </Button>
          <Button secondary SVGPath={checkMark}>
            Zatwierdź
          </Button>
        </CollapseContentWraper>
      </Collapse>
    </div>
  )
}
const mapStateToProps = ({ filterBar }) => ({ filterBar })

export default connect(mapStateToProps, { updateFilterBar })(FilterBar)
