import React from "react"
import styled from "styled-components"

import DataTable from "./DataTable"

const StyledWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProductDetails = ({ detailsArray }) => {
  return (
    <StyledWraper>
      <h2>Szczegóły produktu</h2>
      {detailsArray.length ? (
        <DataTable dataObject={detailsArray} />
      ) : (
        <h4>Brak dodatkowych informacji</h4>
      )}
    </StyledWraper>
  )
}
export default ProductDetails
