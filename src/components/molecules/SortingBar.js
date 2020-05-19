import React from "react"
import {
  Collapse,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@material-ui/core"
import { connect } from "react-redux"

import ExpansionButton from "../atoms/ExpansionButton"
import { sort } from "../../assets/SVGIconPaths"
import ExpansionDrawer from "../atoms/ExpansionDrawer"
import { updateSortingBar } from "../../redux/actions"

const SortingBar = ({ sortingBar, updateSortingBar }) => {
  const { isOpen, sortBy } = sortingBar
  const handleChange = event => updateSortingBar(isOpen, event.target.value)

  return (
    <div>
      <ExpansionButton
        iconPath={sort}
        condition={isOpen}
        onClick={() => updateSortingBar(!isOpen, sortBy)}
      >
        Sortuj
      </ExpansionButton>

      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <ExpansionDrawer>
          <FormControl>
            <RadioGroup value={sortBy} onChange={handleChange}>
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

const mapStateToProps = ({ sortingBar, sortBy }) => ({ sortingBar, sortBy })

export default connect(mapStateToProps, { updateSortingBar })(SortingBar)
