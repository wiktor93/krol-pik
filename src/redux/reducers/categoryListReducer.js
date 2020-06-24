import initialState from "../initialState"
import {
  SET_CATEGORY_LIST_SWITCH,
  UPDATE_CHOSEN_CATEGORY,
} from "../actionTypes"

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

export default categoryListReducer
