import React from "react"
import styled from "styled-components"

import MainLayout from "../layouts/MainLayout"
import SEO from "../components/molecules/SEO"
import ShopNavigatorBar from "../components/molecules/ShopNavigatorBar"
import ImageSlider from "../components/molecules/ImageSlider"
import ProductInfoColumn from "../components/molecules/ProductInfoColumn"
import ProductDetails from "../components/molecules/ProductDetails"
import dummyProducts from "../assets/dummies/dummyProducts"
import device from "../styles/mediaBreakpoints"

const StyledGridSection = styled.section`
  margin: 0 auto;
  padding: 25px 0 75px;
  width: 90%;
  max-width: 1280px;
  display: grid;
  justify-items: center;
  gap: 5%;

  @media ${device.laptop} {
    grid-template-columns: 7fr 3fr;
  }
`

const ProductPageLayout = props => {
  const { pageContext, path } = props
  const [product] = dummyProducts.filter(el => el.id === pageContext.id)
  return (
    <MainLayout>
      <SEO title="Sklep" />
      <ShopNavigatorBar productName={product.productName} productPath={path} />

      <StyledGridSection>
        <ImageSlider product={product} />
        <ProductInfoColumn product={product} productPath={path} />
      </StyledGridSection>

      <ProductDetails detailsArray={product.productDetails} />
    </MainLayout>
  )
}

export default ProductPageLayout
