import React from "react"
import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core"
import { connect } from "react-redux"

import { setCheckedManufacturers } from "../../redux/actions"

const ManufacturerCheckbox = props => {
  const { checkedManufacturers, setCheckedManufacturers } = props

  const handleChange = event =>
    setCheckedManufacturers({
      ...checkedManufacturers,
      [event.target.name]: event.target.checked,
    })

  return (
    <FormControl component="fieldset">
      <h4>Producent</h4>
      <FormGroup>
        {Object.keys(checkedManufacturers).map((el, i) => (
          <FormControlLabel
            key={i}
            control={
              <Checkbox
                checked={checkedManufacturers[el]}
                onChange={handleChange}
                name={el}
              />
            }
            label={el}
          />
        ))}
      </FormGroup>
    </FormControl>
  )
}

const mapStateToProps = ({ filterBar }) => ({
  checkedManufacturers: filterBar.checkedManufacturers,
})

export default connect(mapStateToProps, {
  setCheckedManufacturers,
})(ManufacturerCheckbox)
