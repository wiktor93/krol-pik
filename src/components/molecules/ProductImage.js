import React from "react"
import styled from "styled-components"

const Wraper = styled.picture`
  width: 100%;
  height: 480px;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: scale-down;
  }
`

const ProductImage = ({ product }) => {
  const { productName, pictureURL } = product
  return (
    <Wraper>
      <img src={pictureURL} alt={productName} />
    </Wraper>
  )
}
export default ProductImage
