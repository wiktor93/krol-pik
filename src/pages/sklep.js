import React from "react"
import styled from "styled-components"

import MainLayout from "../layouts/MainLayout"
import SEO from "../components/molecules/SEO"
import Pagination from "../components/molecules/Pagination"
import ProductGallery from "../components/organisms/ProductGallery"

const Section = styled.section`
  margin: 0 auto;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ShopPage = ({ data }) => (
  <MainLayout>
    <SEO title="Sklep" />
    <ProductGallery />
    <Pagination />
  </MainLayout>
)

export default ShopPage
