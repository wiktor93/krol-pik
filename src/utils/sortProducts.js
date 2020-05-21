const sortProducts = (array, sortBy) => {
  switch (sortBy) {
    case "ASC":
      return array.sort((a, b) => +a.price - +b.price)

    case "DESC":
      return array.sort((a, b) => +b.price - +a.price)

    case "az":
      return array.sort((a, b) => {
        if (a.productName > b.productName) return 1
        if (a.productName < b.productName) return -1
        return 0
      })

    case "za":
      return array.sort((a, b) => {
        if (a.productName > b.productName) return -1
        if (a.productName < b.productName) return 1
        return 0
      })

    default:
      return array.sort((a, b) => +a.id - +b.id)
  }
}

export default sortProducts
