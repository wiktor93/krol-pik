const filterProducts = (
  array,
  priceRange,
  checkedManufacturers,
  searchBarInputValue,
  chosenCategory
) => {
  let filteredArray = array
  const isAnyManufacturerMarked = Object.values(checkedManufacturers).includes(
    true
  )

  //filter by category
  if (chosenCategory)
    filteredArray = filteredArray.filter(({ category, subcategory }) =>
      [category, subcategory]
        .join(",")
        .toLowerCase()
        .includes(chosenCategory.toLowerCase())
    )

  //filter by price
  filteredArray = filteredArray.filter(
    product => product.price >= priceRange[0] && product.price <= priceRange[1]
  )

  //filter by manufacturer
  if (isAnyManufacturerMarked)
    filteredArray = filteredArray.filter(
      product => checkedManufacturers[product.manufacturer]
    )

  //filter by searched value
  if (searchBarInputValue)
    filteredArray = filteredArray.filter(product => {
      const {
        productName,
        category,
        manufacturer,
        SKUCode,
        subcategory,
      } = product
      const searchableItems = [
        productName,
        category,
        manufacturer,
        SKUCode,
        subcategory,
      ]
      let isItemFound = false

      for (const item of searchableItems) {
        if (item.toLowerCase().includes(searchBarInputValue.toLowerCase())) {
          isItemFound = true
          break
        }
      }
      return isItemFound
    })

  return filteredArray
}
export default filterProducts
