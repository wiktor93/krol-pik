import {
  SET_NOTIFICATION_VISIBILITY,
  SET_NOTIFICATION_TEXT,
  SET_FILTER_BAR_EXPANSION,
  UPDATE_SORTING_BAR,
  SET_CATEGORY_LIST_SWITCH,
  UPDATE_CHOSEN_CATEGORY,
  SET_PRICE_RANGE,
  SET_CHECKED_MANUFACTURERS,
  SET_SEARCH_BAR_INPUT_VALUE,
  SET_PAGINATION_PAGE,
  SET_ALL_PAGINATION_PAGES,
} from "./actionTypes"

export const setAllPaginationPages = allPages => ({
  type: SET_ALL_PAGINATION_PAGES,
  payload: allPages,
})

export const setPaginationPage = pageNumber => ({
  type: SET_PAGINATION_PAGE,
  payload: pageNumber,
})

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

export const setCategoryListSwitch = isOpen => ({
  type: SET_CATEGORY_LIST_SWITCH,
  payload: { isOpen },
})

export const updateSortingBar = (isOpen, sortBy) => ({
  type: UPDATE_SORTING_BAR,
  payload: { isOpen, sortBy },
})

export const setNotificationText = (message, severity) => ({
  //severity = (success, error, warning, info)
  type: SET_NOTIFICATION_TEXT,
  payload: { message, severity },
})

export const setNotificationVisibility = visibility => ({
  type: SET_NOTIFICATION_VISIBILITY,
  payload: visibility,
})
