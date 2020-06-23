import React, { useState } from "react"
import styled from "styled-components"
import { connect } from "react-redux"

import Button from "../atoms/Button"
import { addToBasket } from "../../assets/SVGIconPaths"
import Select from "../atoms/Select"
import accoutingNumberFormat from "../../utils/accoutingNumberFormat"
import { notificationSwitch, setNotificationText } from "../../redux/actions"
import checkInputValues from "../../utils/checkInputValues"

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

const ProductInfoColumn = props => {
  const {
    product,
    productPath,
    notificationSwitch,
    setNotificationText,
  } = props
  const { productName, SKUCode, price, pictureURL, productOptions } = product

  const initialDataItems = productOptions.reduce((prev, cur, i) => {
    prev[`data-item-custom${i + 1}-name`] = cur.name
    prev[`data-item-custom${i + 1}-options`] = cur.value
    prev[`data-item-custom${i + 1}-value`] = ""
    return prev
  }, {})
  const [customDataItems, setCustomDataItems] = useState(initialDataItems)
  const areInputsChosen = checkInputValues(customDataItems)

  const handleButtonClick = () => {
    if (!areInputsChosen)
      setNotificationText(
        "Aby dodać przedmiot do koszyka, wybierz dostępne opcje.",
        "info"
      )
    else setNotificationText("Produkt został dodany do koszyka.", "success")
    notificationSwitch(true)
  }
  const formatedPrice = accoutingNumberFormat(price)

  return (
    <StyledWraper>
      <div>
        <h2>{productName}</h2>
        <p className="sku-code">Kod producenta: {SKUCode}</p>
      </div>
      <p className="price">
        <strong>Cena:</strong> {formatedPrice} zł
      </p>

      {productOptions.map((option, i) => (
        <Select
          key={i}
          optionNumber={i + 1}
          inputLabel={option.name}
          values={option.value}
          customDataItems={customDataItems}
          setCustomDataItems={setCustomDataItems}
        />
      ))}

      <Button
        SVGPath={addToBasket}
        onClick={handleButtonClick}
        height="56px"
        className={areInputsChosen ? "snipcart-add-item" : null}
        data-item-id={SKUCode}
        data-item-price={price}
        data-item-name={productName}
        data-item-url={productPath}
        data-item-image={pictureURL}
        // data-item-description="Krótki opis produktu 2-3 zdania"
        data-item-max-quantity={5}
        {...customDataItems}
      >
        Dodaj do koszyka
      </Button>
    </StyledWraper>
  )
}
export default connect(null, { notificationSwitch, setNotificationText })(
  ProductInfoColumn
)
