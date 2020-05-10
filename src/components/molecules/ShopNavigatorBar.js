import React from "react"
import styled from "styled-components"

const Section = styled.section`
  margin: 0 auto;
  width: 90%;
  max-width: 1280px;
  padding: 15px 0;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  h1 {
    margin: 0;
    flex-grow: 1;
    padding-left: 40px;
  }
  img {
    height: 40px;
  }
`

const ShopNavigatorBar = () => {
  return (
    <Section>
      <h1>Sklep</h1>
      <img
        src="https://image.flaticon.com/icons/svg/1671/1671123.svg"
        alt="shoping cart"
      />
    </Section>
  )
}
export default ShopNavigatorBar
