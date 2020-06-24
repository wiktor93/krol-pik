import extractManufacturers from "../utils/extractManufacturers"
import dummyProducts from "../assets/dummies/dummyProducts"

const maxPrice = Math.max(...dummyProducts.map(el => el.price))
const initialState = {
  products: dummyProducts,
  notification: {
    visibility: false,
    message: "",
    severity: "success",
  },
  categoryList: {
    isOpen: (() => {
      if (typeof window !== "undefined")
        return window.innerWidth >= 1024 ? true : false
    })(),
    chosenCategory: null,
  },
  filterBar: {
    isOpen: false,
    priceRange: [0, maxPrice],
    checkedManufacturers: extractManufacturers(dummyProducts),
  },
  sortingBar: {
    isOpen: false,
    sortBy: "latest",
  },
  searchBarInputValue: "",
  pagination: {
    currentPage: 1,
    allPages: null,
  },
}

export default initialState
