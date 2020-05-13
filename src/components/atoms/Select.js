import React, { useState } from "react"
import {
  FormControl,
  InputLabel,
  Select as MUISelect,
  MenuItem,
} from "@material-ui/core"

const Select = ({ inputLabel }) => {
  const [value, setValue] = useState("")
  const handleChange = e => {
    setValue(e.target.value)
  }
  return (
    <FormControl variant="outlined">
      <InputLabel>{inputLabel}</InputLabel>
      <MUISelect value={value} onChange={handleChange} label={inputLabel}>
        <MenuItem value={10}>Opcja 1</MenuItem>
        <MenuItem value={20}>Opcja 2</MenuItem>
        <MenuItem value={30}>Opcja 3</MenuItem>
      </MUISelect>
    </FormControl>
  )
}
export default Select
