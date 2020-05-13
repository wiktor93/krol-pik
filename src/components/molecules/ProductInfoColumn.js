import React, { useState } from "react"
import styled from "styled-components"
import { Snackbar } from "@material-ui/core"
import { Alert } from "@material-ui/lab"

import Button from "../atoms/Button"
import Select from "../atoms/Select"
import { addToBasket } from "../../assets/SVGIconPaths"

const StyledWraper = styled.div`
  width: 100%;
  max-width: 400px;
  display: grid;
  row-gap: 25px;
  h2 {
    margin: 0;
  }
  .sku-code {
    color: rgba(0, 0, 0, 0.6);
  }
`

const ProductInfoColumn = ({ product }) => {
  const [open, setOpen] = useState(false)
  const { productName, SKUCode, price } = product
  const handleButtonClick = () => {
    setOpen(true)
  }
  const handleSnackBarClose = (event, reason) => {
    if (reason === "clickaway") return
    setOpen(false)
  }
  return (
    <StyledWraper>
      <h2>{productName}</h2>
      <p className="sku-code">Kod producenta: {SKUCode}</p>
      <p>Cena: {price} zł</p>
      <Select inputLabel="Kolor" />
      <Select inputLabel="Rozmiar ramy" />
      <Button SVGPath={addToBasket} onClick={handleButtonClick}>
        Dodaj do koszyka
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleSnackBarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackBarClose}
          severity="success"
          variant="filled"
        >
          Produkt został dodany do koszyka
        </Alert>
      </Snackbar>
    </StyledWraper>
  )
}
export default ProductInfoColumn
