const checkInputValues = stateObject => {
  for (let [key, value] of Object.entries(stateObject)) {
    if (key.includes("value")) {
      if (!value.length) return false
    }
  }
  return true
}

export default checkInputValues
