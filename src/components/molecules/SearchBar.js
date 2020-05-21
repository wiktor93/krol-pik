import React from "react"
import styled from "styled-components"
import { SvgIcon } from "@material-ui/core"
import { connect } from "react-redux"

import { loupe } from "../../assets/SVGIconPaths"
import TextClearButton from "../atoms/TextCleanButton"
import { border1Mixin } from "../../styles/styledMixins"
import { setSearchBarInputValue } from "../../redux/actions"

const Wraper = styled.div`
  ${border1Mixin}
  height: 45px;
  padding: 5px 25px;
  display: flex;
  align-items: center;
`

const Input = styled.input`
  margin: 0 10px;
  width: calc(100% - 24px);
  height: 95%;
  border: none;
  font-size: 16px;
  font-family: inherit;

  &::placeholder {
    color: black;
    font-size: inherit;
    font-family: inherit;
    font-weight: 600;
    transition: 0.3s;
  }
  &:focus {
    outline: none;
    &::placeholder {
      color: rgba(0, 0, 0, 0.5);
    }
  }
`

const SearchBar = props => {
  const { searchBarInputValue, setSearchBarInputValue } = props
  return (
    <Wraper>
      <SvgIcon>
        <path d={loupe} />
      </SvgIcon>
      <Input
        type="text"
        placeholder="Szukaj..."
        value={searchBarInputValue}
        onChange={e => setSearchBarInputValue(e.target.value)}
      ></Input>
      <TextClearButton
        visible={searchBarInputValue}
        onClick={() => setSearchBarInputValue("")}
      ></TextClearButton>
    </Wraper>
  )
}

const mapStateToProps = ({ searchBarInputValue }) => ({ searchBarInputValue })

export default connect(mapStateToProps, { setSearchBarInputValue })(SearchBar)
