import React from "react"
import styled from "styled-components"

const Picture = styled.picture`
  width: 100%;
  height: max-content;
  overflow: hidden;
  padding-bottom: 20px;

  &.full-size {
    height: 100%;
    img {
      max-height: 100%;
    }
  }

  img {
    height: 100%;
    max-height: 400px;
    max-width: 100%;
    object-fit: contain;
    cursor: pointer;
  }
`

function ProductPicture(props) {
  const { image, alt } = props
  return (
    <Picture {...props}>
      <img src={image} alt={alt} />
    </Picture>
  )
}
export default ProductPicture
