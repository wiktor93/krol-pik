import React, { useEffect } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { connect } from "react-redux"

import ProductCard from "../molecules/ProductCard"
import slugify from "../../utils/slugify"
import sortProducts from "../../utils/sortProducts"
import filterProducts from "../../utils/filterProducts"
import { setAllPaginationPages } from "../../redux/actions"

const Wraper = styled.section`
  display: flex;
  flex-direction: column;

  section {
    margin-bottom: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 25px;
  }
  h4 {
    height: 86px;
    display: flex;
    justify-content: center;
    align-items: center;
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
    currentPage,
    setAllPaginationPages,
  } = props

  const sortedProducts = sortProducts(products, sortBy)
  const filteredProducts = filterProducts(
    sortedProducts,
    priceRange,
    checkedManufacturers,
    searchBarInputValue,
    chosenCategory
  )

  const itemsPerPage = 24
  const indexOfLastProduct = currentPage * itemsPerPage
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage

  useEffect(() => {
    const allPages = Math.ceil(filteredProducts.length / itemsPerPage)
    setAllPaginationPages(allPages || 1)
  }, [filteredProducts, setAllPaginationPages])

  return (
    <Wraper>
      <h2>Produkty</h2>
      <section>
        {filteredProducts
          .slice(indexOfFirstProduct, indexOfLastProduct)
          .map((el, i) => (
            <Link
              key={i}
              to={`/sklep/${slugify(el.category)}/${slugify(el.productName)}`}
            >
              <ProductCard product={el} />
            </Link>
          ))}
      </section>
      {!filteredProducts.length && <h4>Brak produktów do wyświetlenia</h4>}
    </Wraper>
  )
}

const mapStateToProps = ({
  products,
  sortingBar,
  filterBar,
  searchBarInputValue,
  categoryList,
  pagination,
}) => ({
  products,
  sortBy: sortingBar.sortBy,
  priceRange: filterBar.priceRange,
  checkedManufacturers: filterBar.checkedManufacturers,
  searchBarInputValue,
  chosenCategory: categoryList.chosenCategory,
  currentPage: pagination.currentPage,
})
export default connect(mapStateToProps, { setAllPaginationPages })(
  AllProductsGallery
)
