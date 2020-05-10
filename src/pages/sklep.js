import React from "react"
import styled from "styled-components"

import MainLayout from "../layouts/MainLayout"
import SEO from "../components/molecules/SEO"
import ShopNavigatorBar from "../components/molecules/ShopNavigatorBar"
import ProductHandlingPanel from "../components/organisms/ProductHandlingPanel"
import ProductsGallery from "../components/organisms/ProductsGallery"
import device from "../styles/mediaBreakpoints"

const Wraper = styled.section`
  width: 90%;
  margin: 0 auto;
  max-width: 1280px;
  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 250px auto;
    gap: 25px;
  }
`

const ShopPage = ({ data }) => (
  <MainLayout>
    <SEO title="Sklep" />

    <ShopNavigatorBar />

    <Wraper>
      <ProductHandlingPanel />
      <ProductsGallery />
    </Wraper>
  </MainLayout>
)

export default ShopPage
