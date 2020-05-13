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
      <DataTable arrayOfObjects={detailsArray} />
    </StyledWraper>
  )
}
export default ProductDetails
