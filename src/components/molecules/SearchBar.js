import React, { useState } from "react"
import styled from "styled-components"
import { SvgIcon } from "@material-ui/core"

import { InputMixin } from "../../styles/styledMixins"
import CloseIcon from "@material-ui/icons/Close"
import { loupe } from "../../assets/SVGIconPaths"

const Wraper = styled.div`
  ${InputMixin}
  height: 45px;
  padding: 5px 25px;
  display: flex;
  align-items: center;
`
const Input = styled.input`
  border: none;
  width: calc(100% - 24px);
  height: 95%;
  padding-right: 10px;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;

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

const TextClearButton = styled.div`
  display: ${props => (props.visible ? "block" : "none")};
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: none;
  transition: 0.3s;
  svg {
    fill: rgba(0, 0, 0, 0.5);
    transition: 0.3s;
    &:hover {
      cursor: pointer;
      fill: rgba(0, 0, 0, 1);
    }
  }
`

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("")
  return (
    <Wraper>
      <SvgIcon>
        <path d={loupe} />
      </SvgIcon>
      <Input
        type="text"
        placeholder="Szukaj..."
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      ></Input>
      <TextClearButton visible={inputValue} onClick={() => setInputValue("")}>
        <CloseIcon />
      </TextClearButton>
    </Wraper>
  )
}
export default SearchBar
