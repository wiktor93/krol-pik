import React from "react"
import styled from "styled-components"
import LeftArrow from "@material-ui/icons/ArrowBackIosRounded"
import RightArrow from "@material-ui/icons/ArrowForwardIosRounded"
import { connect } from "react-redux"

import { setPaginationPage } from "../../redux/actions"

const StyledPagination = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin: 0 10px;
    &:hover {
      cursor: pointer;
      fill: rgba(0, 0, 0, 0.5);
    }
  }
  .disabled {
    fill: rgba(0, 0, 0, 0.2);
    &:hover {
      cursor: auto;
      fill: rgba(0, 0, 0, 0.2);
    }
  }
`

const Pagination = props => {
  const { currentPage, allPages, setPaginationPage } = props

  const handleClick = arrowType => {
    if (arrowType === "left" && currentPage > 1)
      setPaginationPage(currentPage - 1)
    if (arrowType === "right" && currentPage < allPages)
      setPaginationPage(currentPage + 1)
  }

  return (
    <StyledPagination>
      <LeftArrow
        className={currentPage === 1 ? "disabled" : null}
        onClick={() => handleClick("left")}
      />

      <p>
        Strona: {currentPage} z {allPages}
      </p>

      <RightArrow
        className={currentPage === allPages ? "disabled" : null}
        onClick={() => handleClick("right")}
      />
    </StyledPagination>
  )
}

const mapStateToProps = ({ pagination }) => ({
  currentPage: pagination.currentPage,
  allPages: pagination.allPages,
})

export default connect(mapStateToProps, { setPaginationPage })(Pagination)
