import React, { useState } from "react"
import styled from "styled-components"
import {
  Collapse,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@material-ui/core"

import Button from "../atoms/Button"
import { sort } from "../../assets/SVGIconPaths"

const Wraper = styled.div`
  border: 1px solid black;
  border-top: none;
  padding: 8px 16px;

  .MuiRadio-colorSecondary.Mui-checked {
    color: black;
  }

  .MuiRadio-root,
  .MuiRadio-colorSecondary.Mui-checked {
    &:hover {
      background-color: unset;
    }
  }
`

const SortingBar = () => {
  const [listSwitch, setListSwitch] = useState(false)
  const [selectedValue, setSelectedValue] = useState("latest")
  const handleChange = event => {
    setSelectedValue(event.target.value)
  }

  return (
    <div>
      <Button
        secondary
        SVGPath={sort}
        onClick={() => setListSwitch(!listSwitch)}
      >
        Sortuj
      </Button>

      <Collapse in={listSwitch} timeout="auto" unmountOnExit>
        <Wraper>
          <FormControl>
            <RadioGroup value={selectedValue} onChange={handleChange}>
              <FormControlLabel
                value="ASC"
                control={<Radio />}
                label="Cena: rosnąco"
              />
              <FormControlLabel
                value="DESC"
                control={<Radio />}
                label="Cena: malejąco"
              />
              <FormControlLabel
                value="latest"
                control={<Radio />}
                label="Najnowsze"
              />
              <FormControlLabel
                value="az"
                control={<Radio />}
                label="Nazwa: A-Z"
              />

              <FormControlLabel
                value="za"
                control={<Radio />}
                label="Nazwa: Z-A"
              />
            </RadioGroup>
          </FormControl>
        </Wraper>
      </Collapse>
    </div>
  )
}
export default SortingBar
