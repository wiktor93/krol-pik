import React from "react"
import styled from "styled-components"

import accoutingNumberFormat from "../../utils/accoutingNumberFormat"
import { hoverShadowMixin, fading } from "../../styles/styledMixins"

const StyledArticle = styled.article`
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s;
  text-align: center;
  animation: ${fading} 0.3s linear;

  picture {
    overflow: hidden;
    padding: 15px;

    img {
      height: 100%;
      max-width: 100%;
      object-fit: scale-down;
    }
  }

  p {
    margin-bottom: 5px;
    span {
      color: rgba(0, 0, 0, 0.6);
    }
  }

  &:hover {
    cursor: pointer;
    ${hoverShadowMixin}
    transform: translateY(-4px)
  }
`

const ProductCard = ({ product }) => {
  const { productName, manufacturer, pictureURL, price } = product
  const formatedPrice = accoutingNumberFormat(price)

  return (
    <StyledArticle>
      <picture>
        <img src={pictureURL} alt={productName} />
      </picture>
      <p>{manufacturer}</p>
      <p>
        <span>{productName}</span>
      </p>
      <p>{formatedPrice} zł</p>
    </StyledArticle>
  )
}
export default ProductCard
