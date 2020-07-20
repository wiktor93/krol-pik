import React from "react"
import styled from "styled-components"

import data from "../../assets/data"

const Popover = styled.div`
  padding: 10px;
  div {
    display: flex;
    justify-content: space-between;

    span {
      display: block;
      padding: 0 10px;
      line-height: 2rem;
    }
  }
`

function OpeningHours() {
  const { openingHours } = data

  return (
    <Popover>
      {openingHours.map((el, i) => (
        <div key={i}>
          <span>{el.day}:</span>
          <span>{el.hours}</span>
        </div>
      ))}
    </Popover>
  )
}
export default OpeningHours
