import React from "react"
import styled from "styled-components"

const StyledWraper = styled.ul`
  width: 90%;
  max-width: max-content;
  display: flex;
  flex-direction: column;
  align-items: left;

  .row {
    width: 100%;
    min-height: 45px;
    display: grid;
    column-gap: 15px;
    align-items: center;
    grid-template-columns: 4fr 6fr;
    padding: 0px 15px;
    border-top: 1px solid rgb(238, 238, 238);

    div:first-of-type {
      font-weight: 600;
    }

    &:nth-child(2n + 1) {
      background-color: rgb(249, 249, 249);
    }

    &:last-child {
      border-bottom: 1px solid rgb(238, 238, 238);
    }

    &:hover {
      background-color: rgb(238, 238, 238);
    }
  }
`

const DataTable = ({ arrayOfObjects }) => {
  return (
    <StyledWraper>
      {arrayOfObjects.map((el, i) => (
        <li key={i} className="row">
          <div>{Object.keys(el)[0]}</div>
          <div>{Object.values(el)[0]}</div>
        </li>
      ))}
    </StyledWraper>
  )
}

export default DataTable
