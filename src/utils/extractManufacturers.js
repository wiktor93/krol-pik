const extractManufacturers = array =>
  array
    .map(el => el.manufacturer)
    .sort()
    .reduce((prev, cur, i, arro) => {
      if (cur !== arro[i - 1]) prev[cur] = false
      return prev
    }, {})

export default extractManufacturers
