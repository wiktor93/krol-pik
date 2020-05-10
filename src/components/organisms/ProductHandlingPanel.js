import React from "react"
import styled from "styled-components"

import CategoryList from "../molecules/CategoryList"
import SearchBar from "../molecules/SearchBar"
import FilterBar from "../molecules/FilterBar"
import SortingBar from "../molecules/SortingBar"
import device from "../../styles/mediaBreakpoints"

const Aside = styled.aside`
  width: 100%;
  height: max-content;
  margin: 25px auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.laptop} {
    grid-template-columns: 1fr;
  }
`

const ProductHandlingPanel = () => {
  return (
    <Aside>
      <CategoryList />
      <SearchBar />
      <FilterBar />
      <SortingBar />
    </Aside>
  )
}
export default ProductHandlingPanel
