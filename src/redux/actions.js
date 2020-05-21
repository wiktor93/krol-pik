import {
  NOTIFICATION_SWITCH,
  SET_FILTER_BAR_EXPANSION,
  UPDATE_SORTING_BAR,
  CATEGORY_LIST_SWITCH,
  UPDATE_CHOSEN_CATEGORY,
  SET_PRICE_RANGE,
  SET_CHECKED_MANUFACTURERS,
  SET_SEARCH_BAR_INPUT_VALUE,
} from "./actionTypes"

export const setSearchBarInputValue = value => ({
  type: SET_SEARCH_BAR_INPUT_VALUE,
  payload: value,
})

export const setCheckedManufacturers = checkedManufacturers => ({
  type: SET_CHECKED_MANUFACTURERS,
  payload: checkedManufacturers,
})

export const setPriceRange = priceRangeArray => ({
  type: SET_PRICE_RANGE,
  payload: priceRangeArray,
})

export const setFilterBarExpansion = isOpen => ({
  type: SET_FILTER_BAR_EXPANSION,
  payload: isOpen,
})

export const updateChosenCategory = category => ({
  type: UPDATE_CHOSEN_CATEGORY,
  payload: { chosenCategory: category },
})

export const categoryListSwitch = isOpen => ({
  type: CATEGORY_LIST_SWITCH,
  payload: { isOpen },
})

export const updateSortingBar = (isOpen, sortBy) => ({
  type: UPDATE_SORTING_BAR,
  payload: { isOpen, sortBy },
})

export const notificationSwitch = (
  visibility,
  message,
  severity = "success"
) => ({
  type: NOTIFICATION_SWITCH,
  payload: { visibility, message, severity },
})
