import { combineReducers } from "redux"

import dummyProducts from "../../assets/dummies/dummyProducts"
import initialState from "../initialState"
import paginationReducer from "./paginationReducer"
import categoryListReducer from "./categoryListReducer"
import searchBarReducer from "./searchBarReducer"
import sortingBarReducer from "./sortingBarReducer"
import filterBarReducer from "./filterBarReducer"
import notificationReducer from "./notificationReducer"

const maxPrice = Math.max(...dummyProducts.map(el => el.price))

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
