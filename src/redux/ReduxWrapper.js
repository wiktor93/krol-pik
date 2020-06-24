import React from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"

import reducers from "./reducers/reducers"

const ReduxWrapper = ({ element }) => (
  <Provider store={createStore(reducers)}>{element}</Provider>
)

export default ReduxWrapper
