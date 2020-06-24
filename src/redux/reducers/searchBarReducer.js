import { SET_SEARCH_BAR_INPUT_VALUE } from "../actionTypes"

const searchBarReducer = (prevState = "", action) => {
  switch (action.type) {
    case SET_SEARCH_BAR_INPUT_VALUE:
      return action.payload

    default:
      return prevState
  }
}

export default searchBarReducer
