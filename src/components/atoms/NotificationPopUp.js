import React from "react"
import { Snackbar } from "@material-ui/core"
import { Alert } from "@material-ui/lab"
import { connect } from "react-redux"

import { notificationSwitch } from "../../redux/actions"

const NotificationPopUp = ({ notification, notificationSwitch }) => {
  const { visibility, message, severity } = notification
  const handleSnackBarClose = () => notificationSwitch(false)

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

export default connect(mapStateToProps, { notificationSwitch })(
  NotificationPopUp
)
