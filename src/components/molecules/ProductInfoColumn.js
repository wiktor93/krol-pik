import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"

import Button from "../atoms/Button"
import { addToBasket } from "../../assets/SVGIconPaths"
import Select from "../atoms/Select"
import accoutingNumberFormat from "../../utils/accoutingNumberFormat"
import { notificationSwitch } from "../../redux/actions"

const StyledWraper = styled.div`
  width: 100%;
  max-width: 400px;
  display: grid;
  grid-template-rows: repeat(5, max-content);
  row-gap: 25px;

  h2 {
    margin: 0 0 10px;
  }
  .sku-code {
    color: rgba(0, 0, 0, 0.5);
    font-size: 12px;
  }
  strong {
    margin-right: 10px;
  }
`

const ProductInfoColumn = ({ product, notificationSwitch }) => {
  const { productName, SKUCode, price, pictureURL, productPath } = product
  const formatedPrice = accoutingNumberFormat(price)
  const handleButtonClick = () =>
    notificationSwitch(true, "Produkt został dodany do koszyka")

  return (
    <StyledWraper>
      <div>
        <h2>{productName}</h2>
        <p className="sku-code">Kod producenta: {SKUCode}</p>
      </div>

      <p className="price">
        <strong>Cena:</strong> {formatedPrice} zł
      </p>

      <Select inputLabel="Kolor" />
      <Select inputLabel="Rozmiar ramy" />

      <Button
        SVGPath={addToBasket}
        onClick={handleButtonClick}
        height="56px"
        className="snipcart-add-item"
        data-item-id={SKUCode}
        data-item-price={price}
        data-item-name={productName}
        data-item-url={productPath}
        data-item-image={pictureURL}
        data-item-description="Krótki opis produktu 2-3 zdania?"
        data-item-max-quantity={5}
        data-item-custom1-name="Kolor"
        data-item-custom1-options="Czarny|Biały"
        data-item-custom2-name={null}
        data-item-custom2-options={null}
      >
        Dodaj do koszyka
      </Button>
    </StyledWraper>
  )
}
export default connect(null, { notificationSwitch })(ProductInfoColumn)
