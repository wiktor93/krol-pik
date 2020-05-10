import React, { useState } from "react"
import styled from "styled-components"
import { Collapse } from "@material-ui/core"

import Button from "../atoms/Button"
import ExpansionButton from "../atoms/ExpansionButton"
import { filter } from "../../assets/SVGIconPaths"
import RangeSlider from "../atoms/RangeSlider"
import ManufacturerCheckbox from "../molecules/ManufacturerCheckbox"
import { border1Mixin } from "../../styles/styledMixins"

const CollapseContentWraper = styled.div`
  ${border1Mixin}
  border-top:unset;
  display: grid;
  grid-row-gap: 25px;
  padding: 8px 16px;
`

const FilterBar = () => {
  const [listSwitch, setListSwitch] = useState(true)

  return (
    <div>
      <ExpansionButton
        iconPath={filter}
        onClick={() => setListSwitch(!listSwitch)}
        condition={listSwitch}
      >
        Filtruj
      </ExpansionButton>

      <Collapse in={listSwitch} timeout="auto">
        <CollapseContentWraper>
          <RangeSlider />
          <ManufacturerCheckbox />
          <Button>Zatwierdź</Button>
        </CollapseContentWraper>
      </Collapse>
    </div>
  )
}
export default FilterBar
