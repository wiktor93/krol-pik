import initialState from "../initialState"
import {
  SET_FILTER_BAR_EXPANSION,
  SET_PRICE_RANGE,
  SET_CHECKED_MANUFACTURERS,
} from "../actionTypes"

const filterBarReducer = (prevState = initialState.filterBar, action) => {
  switch (action.type) {
    case SET_FILTER_BAR_EXPANSION:
      return { ...prevState, isOpen: action.payload }
    case SET_PRICE_RANGE:
      return { ...prevState, priceRange: action.payload }
    case SET_CHECKED_MANUFACTURERS:
      return { ...prevState, checkedManufacturers: action.payload }
    default:
      return prevState
  }
}

export default filterBarReducer
