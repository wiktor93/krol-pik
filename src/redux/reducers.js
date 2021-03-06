import { combineReducers } from "redux"
import {
  NOTIFICATION_SWITCH,
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
import dummyProducts from "../assets/dummies/dummyProducts"
import extractManufacturers from "../utils/extractManufacturers"

const maxPrice = Math.max(...dummyProducts.map(el => el.price))
const initialState = {
  products: dummyProducts,
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
    priceRange: [0, maxPrice],
    checkedManufacturers: extractManufacturers(dummyProducts),
  },
  sortingBar: {
    isOpen: false,
    sortBy: "latest",
  },
  searchBarInputValue: "",
  pagination: {
    currentPage: 1,
    allPages: null,
  },
}

const paginationReducer = (prevState = initialState.pagination, action) => {
  switch (action.type) {
    case SET_PAGINATION_PAGE:
      return { ...prevState, currentPage: action.payload }
    case SET_ALL_PAGINATION_PAGES:
      return { ...prevState, allPages: action.payload }
    default:
      return prevState
  }
}

const searchBarReducer = (prevState = "", action) => {
  switch (action.type) {
    case SET_SEARCH_BAR_INPUT_VALUE:
      return action.payload

    default:
      return prevState
  }
}

const categoryListReducer = (prevState = initialState.categoryList, action) => {
  switch (action.type) {
    case SET_CATEGORY_LIST_SWITCH:
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

const notificationReducer = (prevState = initialState.notification, action) => {
  switch (action.type) {
    case NOTIFICATION_SWITCH:
      return { ...prevState, ...action.payload }
    default:
      return prevState
  }
}

export default combineReducers({
  pagination: paginationReducer,
  searchBarInputValue: searchBarReducer,
  maxPrice: () => maxPrice,
  products: () => initialState.products,
  categoryList: categoryListReducer,
  sortingBar: sortingBarReducer,
  filterBar: filterBarReducer,
  notification: notificationReducer,
})
