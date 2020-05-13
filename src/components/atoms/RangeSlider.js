import React, { useState } from "react"
import styled from "styled-components"
import { Slider } from "@material-ui/core"

const StyledWraper = styled.div`
  display: flex;
  flex-direction: column;
  .MuiSlider-root {
    align-self: center;
    width: 95%;
  }
`

const RangeSlider = () => {
  const [value, setValue] = useState([0, 1500])
  const handleChange = (event, newValue) => setValue(newValue)
  const valuetext = value => `${value}°C`
  return (
    <StyledWraper>
      <h4>Cena</h4>
      <Slider
        value={value}
        step={100}
        max={9999}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
      <span>{`Zakres: ${value[0]} zł – ${value[1]} zł`}</span>
    </StyledWraper>
  )
}
export default RangeSlider
