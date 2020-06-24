import initialState from "../initialState"
import { SET_PAGINATION_PAGE, SET_ALL_PAGINATION_PAGES } from "../actionTypes"

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

export default paginationReducer
