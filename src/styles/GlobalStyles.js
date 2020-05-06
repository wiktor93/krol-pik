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
  margin: 25px 0;
  font-size:27px;
  text-align: center;
}

h2 {
  margin: 25px 0;
}

a {
  text-decoration: none;
}

p {
  font-family: "Lato", sans-serif;
}

button {
  &:hover{
    cursor:pointer
  }
  &:focus {
    outline: none;
  }
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
@media ${device.tablet} {
    h1 {
      font-size:38px;
    }
  }
@media ${device.laptop} {
    h1 {
      font-size:45px;
    }
  }
@media ${device.laptopL} {
    h1 {
      font-size:60px;
    }
  }
`

export default GlobalStyle
