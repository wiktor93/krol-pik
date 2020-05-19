import {
  NOTIFICATION_SWITCH,
  UPDATE_FILTER_BAR,
  UPDATE_SORTING_BAR,
  CATEGORY_LIST_SWITCH,
  UPDATE_CHOSEN_CATEGORY,
} from "./actionTypes"

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

export const updateFilterBar = isOpen => ({
  type: UPDATE_FILTER_BAR,
  payload: { isOpen },
})

export const notificationSwitch = (
  visibility,
  message,
  severity = "success"
) => ({
  type: NOTIFICATION_SWITCH,
  payload: { visibility, message, severity },
})
