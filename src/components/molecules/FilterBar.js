import React from "react"
import { Collapse } from "@material-ui/core"

import Button from "../atoms/Button"
import { filter } from "../../assets/SVGIconPaths"

const FilterBar = () => {
  return (
    <div>
      <Button secondary SVGPath={filter}>
        Filtruj
      </Button>

      <Collapse></Collapse>
    </div>
  )
}
export default FilterBar
