import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import ProductCard from "../molecules/ProductCard"
import Pagination from "../molecules/Pagination"
import dummyProducts from "../../assets/dummies/dummyProducts"
import slugify from "../../utils/slugify"

const Wraper = styled.section`
  margin: 0 auto 50px;
  section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 25px;
  }
`

const AllProductsGallery = () => {
  return (
    <Wraper>
      <h2>Polecamy</h2>
      <section>
        {dummyProducts.map((el, i) => (
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
export default AllProductsGallery
