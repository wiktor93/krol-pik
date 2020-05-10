import React from "react"
import styled from "styled-components"
import CloseIcon from "@material-ui/icons/Close"

const StyledWraper = styled.div`
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

const TextCleanButton = ({ visible, onClick }) => {
  return (
    <StyledWraper visible={visible} onClick={onClick}>
      <CloseIcon />
    </StyledWraper>
  )
}
export default TextCleanButton
