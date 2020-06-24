import initialState from "../initialState"
import { UPDATE_SORTING_BAR } from "../actionTypes"

const sortingBarReducer = (prevState = initialState.sortingBar, action) => {
  switch (action.type) {
    case UPDATE_SORTING_BAR:
      return { ...prevState, ...action.payload }
    default:
      return prevState
  }
}

export default sortingBarReducer
