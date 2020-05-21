import React from "react"
import styled from "styled-components"
import { Slider } from "@material-ui/core"
import { connect } from "react-redux"

import { setPriceRange } from "../../redux/actions"

const StyledWraper = styled.div`
  display: flex;
  flex-direction: column;
  .MuiSlider-root {
    align-self: center;
    width: 95%;
  }
`

const PriceRangeSlider = props => {
  const { priceRange, setPriceRange, maxPrice } = props
  const handleChange = (event, newValue) => setPriceRange(newValue)
  const valuetext = value => `${value}°C`
  return (
    <StyledWraper>
      <h4>Cena</h4>
      <Slider
        value={priceRange}
        step={100}
        max={maxPrice}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
      <span>{`Zakres: ${priceRange[0]} zł – ${priceRange[1]} zł`}</span>
    </StyledWraper>
  )
}

const mapStateToProps = ({ filterBar, maxPrice }) => ({
  priceRange: filterBar.priceRange,
  maxPrice,
})

export default connect(mapStateToProps, { setPriceRange })(PriceRangeSlider)
