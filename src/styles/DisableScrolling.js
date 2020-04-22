import { createGlobalStyle } from "styled-components"

const DisableScrolling = createGlobalStyle`
  body {
    position: ${props => props.condition && "fixed"};
    width: ${props => props.condition && "100%"};
  }
`

export default DisableScrolling
