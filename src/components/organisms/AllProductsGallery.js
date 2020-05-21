import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { connect } from "react-redux"

import ProductCard from "../molecules/ProductCard"
import Pagination from "../molecules/Pagination"
import slugify from "../../utils/slugify"
import sortProducts from "../../utils/sortProducts"
import filterProducts from "../../utils/filterProducts"

const Wraper = styled.section`
  margin: 0 auto 50px;
  section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 25px;
  }
`

const AllProductsGallery = props => {
  const {
    products,
    sortBy,
    priceRange,
    checkedManufacturers,
    searchBarInputValue,
    chosenCategory,
  } = props

  const sortedProducts = sortProducts(products, sortBy)
  const filteredProducts = filterProducts(
    sortedProducts,
    priceRange,
    checkedManufacturers,
    searchBarInputValue,
    chosenCategory
  )

  return (
    <Wraper>
      <h2>Polecamy</h2>
      <section>
        {filteredProducts.map((el, i) => (
          <Link
            key={i}
            to={`/sklep/${slugify(el.category)}/${slugify(el.productName)}`}
          >
            <ProductCard product={el} />
          </Link>
        ))}
      </section>
      <Pagination />
    </Wraper>
  )
}

const mapStateToProps = ({
  products,
  sortingBar,
  filterBar,
  searchBarInputValue,
  categoryList,
}) => ({
  products,
  sortBy: sortingBar.sortBy,
  priceRange: filterBar.priceRange,
  checkedManufacturers: filterBar.checkedManufacturers,
  searchBarInputValue,
  chosenCategory: categoryList.chosenCategory,
})
export default connect(mapStateToProps, null)(AllProductsGallery)
