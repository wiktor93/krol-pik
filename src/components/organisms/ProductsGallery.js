import React from "react"
import styled from "styled-components"

import ProductCard from "../molecules/ProductCard"
import Pagination from "../molecules/Pagination"

const Wraper = styled.section`
  margin: 0 auto 50px;
  section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: 25px;
  }
`

const ProductsGallery = () => {
  return (
    <Wraper>
      <h2>Polecamy</h2>
      <section>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
      <Pagination />
    </Wraper>
  )
}
export default ProductsGallery
