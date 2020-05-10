import React, { useState } from "react"
import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core"

const ManufacturerCheckbox = () => {
  const [state, setState] = useState({
    gilad: true,
    jason: false,
    antoine: false,
  })

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  const { gilad, jason, antoine } = state

  return (
    <FormControl component="fieldset">
      <h4>Producent</h4>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
          }
          label="Gilad Gray"
        />
        <FormControlLabel
          control={
            <Checkbox checked={jason} onChange={handleChange} name="jason" />
          }
          label="Jason Killian"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={antoine}
              onChange={handleChange}
              name="antoine"
            />
          }
          label="Antoine Llorca"
        />
      </FormGroup>
    </FormControl>
  )
}
export default ManufacturerCheckbox
