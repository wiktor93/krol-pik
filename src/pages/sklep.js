import React from "react"
import styled from "styled-components"

import MainLayout from "../layouts/MainLayout"
import SEO from "../components/molecules/SEO"
import ShopNavigatorBar from "../components/molecules/ShopNavigatorBar"
import ProductHandlingPanel from "../components/organisms/ProductHandlingPanel"
import AllProductsGallery from "../components/organisms/AllProductsGallery"
import Pagination from "../components/molecules/Pagination"
import device from "../styles/mediaBreakpoints"

const Main = styled.main`
  width: 90%;
  margin: 0 auto;
  max-width: 1280px;
  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 250px auto;
    gap: 25px;
  }
`

const ShopPage = () => (
  <MainLayout>
    <SEO title="Sklep" />

    <ShopNavigatorBar />

    <Main>
      <ProductHandlingPanel />
      <div>
        <AllProductsGallery />
        <Pagination />
      </div>
    </Main>
  </MainLayout>
)

export default ShopPage
