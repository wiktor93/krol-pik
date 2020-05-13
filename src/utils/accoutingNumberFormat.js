const accoutingNumberFormat = number =>
  number
    ? new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
      }).format(number)
    : null

export default accoutingNumberFormat
