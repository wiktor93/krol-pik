import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import NavigateNextIcon from "@material-ui/icons/NavigateNext"
import { connect } from "react-redux"

import ShopingCartButton from "../atoms/ShopingCartButton"
import { updateChosenCategory } from "../../redux/actions"
import device from "../../styles/mediaBreakpoints"

const Section = styled.section`
  margin: 15px auto;
  width: 90%;
  max-width: 1280px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .MuiBreadcrumbs-root {
    display: none;
  }

  @media ${device.laptop} {
    .MuiBreadcrumbs-root {
      display: block;
      flex-grow: 1;
    }
  }
`

const ShopNavigatorBar = props => {
  const {
    chosenCategory,
    productName,
    updateChosenCategory,
    productPath,
  } = props

  return (
    <Section>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link to="/">Start</Link>
        <Link to="/sklep" onClick={() => updateChosenCategory(null)}>
          Sklep
        </Link>
        {chosenCategory && <Link to="/sklep">{chosenCategory}</Link>}
        {productName && <Link to={productPath}>{productName}</Link>}
      </Breadcrumbs>

      <ShopingCartButton />
    </Section>
  )
}

const mapStateToProps = ({ categoryList }) => ({
  chosenCategory: categoryList.chosenCategory,
})

export default connect(mapStateToProps, { updateChosenCategory })(
  ShopNavigatorBar
)
