import React from "react"
import styled, { css } from "styled-components"

const InputMixin = css`
  width: 100%;
  padding: 5px;
  margin-bottom: 15px;
  border: 1px black solid;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
`

const StyledInput = styled.input`
  ${InputMixin}
`

const StyledTextArea = styled.textarea`
  ${InputMixin};
  resize: vertical;
  max-width: 100%;
  min-height: 100px;
`

const Input = props => {
  return props.type === "textarea" ? (
    <StyledTextArea {...props} rows="10"></StyledTextArea>
  ) : (
    <StyledInput {...props} />
  )
}

export default Input
