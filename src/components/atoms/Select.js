import React from "react"
import {
  FormControl,
  InputLabel,
  Select as MUISelect,
  MenuItem,
} from "@material-ui/core"

const Select = props => {
  const {
    optionNumber,
    inputLabel,
    values,
    customDataItems,
    setCustomDataItems,
  } = props

  const selectedValue = customDataItems[`data-item-custom${optionNumber}-value`]

  const handleChange = e => {
    const { id, value } = e.target.dataset
    const updatedOption = {}
    updatedOption[`data-item-custom${id}-value`] = value

    setCustomDataItems({
      ...customDataItems,
      ...updatedOption,
    })
  }

  return (
    <FormControl variant="outlined">
      <InputLabel>{inputLabel}</InputLabel>
      <MUISelect value={selectedValue} label={inputLabel}>
        {values.split("|").map((value, i) => (
          <MenuItem
            key={i}
            data-id={optionNumber}
            data-value={value}
            value={value}
            onClick={handleChange}
          >
            {value}
          </MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  )
}
export default Select
