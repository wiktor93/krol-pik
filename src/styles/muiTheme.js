import { createMuiTheme } from "@material-ui/core/styles"

const muiTheme = createMuiTheme({
  props: {
    MuiCheckbox: {
      color: "primary",
    },
    MuiRadio: {
      color: "primary",
    },
  },

  palette: {
    primary: {
      main: "#000000",
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
})

export default muiTheme
