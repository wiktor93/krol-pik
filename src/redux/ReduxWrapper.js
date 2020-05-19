import React from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"

import reducers from "./reducers"

export default ({ element }) => (
  <Provider store={createStore(reducers)}>{element}</Provider>
)
