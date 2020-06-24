import initialState from "../initialState"
import {
  SET_NOTIFICATION_VISIBILITY,
  SET_NOTIFICATION_TEXT,
} from "../actionTypes"

const notificationReducer = (prevState = initialState.notification, action) => {
  switch (action.type) {
    case SET_NOTIFICATION_VISIBILITY:
      return { ...prevState, visibility: action.payload }
    case SET_NOTIFICATION_TEXT:
      return { ...prevState, ...action.payload }
    default:
      return prevState
  }
}

export default notificationReducer
