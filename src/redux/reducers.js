import { combineReducers } from "redux"
import {
  NOTIFICATION_SWITCH,
  UPDATE_FILTER_BAR,
  UPDATE_SORTING_BAR,
  CATEGORY_LIST_SWITCH,
  UPDATE_CHOSEN_CATEGORY,
} from "./actionTypes"

const initialState = {
  notification: {
    visibility: false,
    message: "",
    severity: "success",
  },
  categoryList: {
    isOpen: (() => {
      if (typeof window !== "undefined")
        return window.innerWidth >= 1024 ? true : false
    })(),
    chosenCategory: null,
  },
  filterBar: {
    isOpen: false,
    priceRange: null,
    manufacturers: [],
  },
  sortingBar: {
    isOpen: false,
    sortBy: "latest",
  },
  basketProducts: [],
}

const categoryListReducer = (prevState = initialState.categoryList, action) => {
  switch (action.type) {
    case CATEGORY_LIST_SWITCH:
      return { ...prevState, ...action.payload }
    case UPDATE_CHOSEN_CATEGORY:
      return { ...prevState, ...action.payload }
    default:
      return prevState
  }
}

const sortingBarReducer = (prevState = initialState.sortingBar, action) => {
  switch (action.type) {
    case UPDATE_SORTING_BAR:
      return { ...prevState, ...action.payload }
    default:
      return prevState
  }
}

const filterBarReducer = (prevState = initialState.filterBar, action) => {
  switch (action.type) {
    case UPDATE_FILTER_BAR:
      return { ...prevState, ...action.payload }
    default:
      return prevState
  }
}

const notificationReducer = (prevState = initialState.notification, action) => {
  switch (action.type) {
    case NOTIFICATION_SWITCH:
      return { ...prevState, ...action.payload }
    default:
      return prevState
  }
}

export default combineReducers({
  notification: notificationReducer,
  filterBar: filterBarReducer,
  sortingBar: sortingBarReducer,
  categoryList: categoryListReducer,
})
