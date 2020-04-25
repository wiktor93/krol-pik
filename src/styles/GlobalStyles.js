import { createGlobalStyle } from "styled-components"
import device from "./mediaBreakpoints"

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Montserrat", sans-serif;
}

h1{
  font-size:27px;
}

h2 {
  margin: 25px 0;
}

p{
  font-family: "Lato", sans-serif;
}

@media ${device.mobileM} {
    h1 {
      font-size:30px;
    }
  }
@media ${device.mobileL} {
    h1 {
      font-size:32px;
    }
  }
@media ${device.laptop} {
    h1 {
      font-size:40px;
    }
  }
`

export default GlobalStyle
