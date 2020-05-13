import React from "react"
import styled from "styled-components"

import MainLayout from "../layouts/MainLayout"
import SEO from "../components/molecules/SEO"
import ShopNavigatorBar from "../components/molecules/ShopNavigatorBar"
import ProductImage from "../components/molecules/ProductImage"
import ProductInfoColumn from "../components/molecules/ProductInfoColumn"
import ProductDetails from "../components/molecules/ProductDetails"
import dummyProducts from "../assets/dummies/dummyProducts"
import dummyProductDetails from "../assets/dummies/dummyProductDetails"
import device from "../styles/mediaBreakpoints"

const StyledGridSection = styled.section`
  margin: 0 auto 50px;
  width: 90%;
  max-width: 1280px;
  display: grid;
  justify-items: center;
  gap: 5%;

  @media ${device.laptop} {
    grid-template-columns: 7fr 3fr;
  }
`

const ProductPageLayout = ({ pageContext }) => {
  const [product] = dummyProducts.filter(el => el.id === pageContext.id)
  return (
    <MainLayout>
      <SEO title="Sklep" />
      <ShopNavigatorBar />

      <StyledGridSection>
        <ProductImage product={product} />
        <ProductInfoColumn product={product} />
      </StyledGridSection>

      <ProductDetails detailsArray={dummyProductDetails} />
    </MainLayout>
  )
}

export default ProductPageLayout
