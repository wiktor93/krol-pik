import React, { useContext } from "react"
import styled from "styled-components"
import { SnipCartContext } from "gatsby-plugin-snipcart-advanced/context"

import CartIcon from "../../assets/icons/shoping-cart.svg"

const Wraper = styled.button`
  position: relative;
  width: max-content;
  border: none;
  background-color: unset;
  img {
    height: 40px;
  }
  .circle {
    display: block;
    position: absolute;
    top: -2px;
    right: -6px;
    font-size: 12px;
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
    background-color: #fff;
    width: 20px;
    height: 20px;
    border: 2px solid black;
    border-radius: 50%;
  }
`

const ShopingCartButton = () => {
  const { state } = useContext(SnipCartContext)
  const { cartQuantity } = state
  return (
    <Wraper className="snipcart-checkout">
      <img src={CartIcon} alt="shoping cart icon" />
      <div className="circle">
        <span className="snipcart-items-count">{cartQuantity}</span>
      </div>
    </Wraper>
  )
}
export default ShopingCartButton
