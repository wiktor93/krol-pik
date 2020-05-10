import React from "react"
import styled from "styled-components"

import { inputMixin } from "../../styles/styledMixins"

const StyledInput = styled.input`
  ${inputMixin}
  height: 45px;
`

const StyledTextArea = styled.textarea`
  ${inputMixin};
  resize: vertical;
  padding: 10px;
  max-width: 100%;
  min-height: 200px;
`

const Input = props => {
  return props.type === "textarea" ? (
    <StyledTextArea {...props} rows="10"></StyledTextArea>
  ) : (
    <StyledInput {...props} />
  )
}

export default Input
