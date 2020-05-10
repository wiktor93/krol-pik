import React, { useState } from "react"
import {
  Collapse,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@material-ui/core"

import ExpansionButton from "../atoms/ExpansionButton"
import { sort } from "../../assets/SVGIconPaths"
import ExpansionDrawer from "../atoms/ExpansionDrawer"

const SortingBar = () => {
  const [listSwitch, setListSwitch] = useState(false)
  const [selectedValue, setSelectedValue] = useState("latest")
  const handleChange = event => {
    setSelectedValue(event.target.value)
  }

  return (
    <div>
      <ExpansionButton
        iconPath={sort}
        condition={listSwitch}
        onClick={() => {
          setListSwitch(!listSwitch)
        }}
      >
        Sortuj
      </ExpansionButton>

      <Collapse in={listSwitch} timeout="auto" unmountOnExit>
        <ExpansionDrawer>
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
        </ExpansionDrawer>
      </Collapse>
    </div>
  )
}
export default SortingBar
