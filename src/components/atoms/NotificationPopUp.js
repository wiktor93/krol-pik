import React from "react"
import { Snackbar } from "@material-ui/core"
import { Alert } from "@material-ui/lab"
import { connect } from "react-redux"

import { setNotificationVisibility } from "../../redux/actions"

const NotificationPopUp = ({ notification, setNotificationVisibility }) => {
  const { visibility, message, severity } = notification
  const handleSnackBarClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    setNotificationVisibility(false)
  }

  return (
    <Snackbar
      open={visibility}
      autoHideDuration={3000}
      onClose={handleSnackBarClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={handleSnackBarClose} severity={severity} variant="filled">
        {message}
      </Alert>
    </Snackbar>
  )
}

const mapStateToProps = ({ notification }) => ({ notification })

export default connect(mapStateToProps, {
  setNotificationVisibility,
})(NotificationPopUp)
