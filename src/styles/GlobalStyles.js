import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

img {
  margin: 0;
}

body {
  height: 150vh;
  font-family: "Montserrat", sans-serif;
}
`

export default GlobalStyle
