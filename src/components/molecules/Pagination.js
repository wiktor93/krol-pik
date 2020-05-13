import React from "react"
import styled from "styled-components"

import { rightArrow, leftArrow } from "../../assets/SVGIconPaths"

const StyledPagination = styled.div`
  margin-top: 75px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 50%;
    transition: 0.3s;

    &:hover {
      cursor: pointer;
      fill: rgba(0, 0, 0, 0.5);
    }
  }
`

const Pagination = () => {
  return (
    <StyledPagination>
      <span>
        <svg viewBox="0 0 20 20">
          <path d={leftArrow}></path>
        </svg>
      </span>
      <p>Strona: 1 z 1</p>
      <span>
        <svg viewBox="0 0 20 20">
          <path d={rightArrow}></path>
        </svg>
      </span>
    </StyledPagination>
  )
}
export default Pagination
