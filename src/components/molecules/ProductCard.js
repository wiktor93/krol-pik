import React from "react"
import styled from "styled-components"

const Article = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s;
  text-align: center;

  picture {
    img {
      width: 100%;
    }
  }

  p {
    margin-bottom: 5px;
    span {
      color: rgba(0, 0, 0, 0.5);
    }
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 0 1px black, 0px 0px 2px 1px rgba(0, 0, 0, 0.08),
      0px 4px 8px 0px rgba(0, 0, 0, 0.16);
  }
`

const ProductCard = () => {
  return (
    <Article>
      <picture>
        <img src="https://source.unsplash.com/random" alt="" />
      </picture>
      <p>Rower Romet MTB 29 cali</p>
      <p>
        <span>2 150,00 zł</span>
      </p>
    </Article>
  )
}
export default ProductCard
