import React, { useState } from "react"
import styled from "styled-components"
import Popover from "@material-ui/core/Popover"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

import data from "../../assets/data"
import phoneIcon from "../../assets/icons/phone-call-icon.svg"
import emailIcon from "../../assets/icons/email-icon.svg"
import clockIcon from "../../assets/icons/clock.svg"
import adressIcon from "../../assets/icons/location-pin.svg"
import OpeningHours from "../atoms/OpeningHours"

const Wraper = styled.div`
  margin: 50px auto;
  width: 90%;
  max-width: 600px;

  ul {
    list-style: none;
    margin-top: 20px;

    li {
      display: flex;
      align-items: center;
      padding: 10px 0;
    }

    img {
      margin-right: 15px;
      height: 30px;
    }
  }
  .expand-hours {
    cursor: pointer;
  }
`

const BusinessCard = () => {
  const currentDate = new Date()
  const currentDay = currentDate.getDay()
  const openHours = data.openingHours.filter(el => el.id === currentDay)
  const [anchorEl, setAnchorEl] = useState(null)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? "popover" : undefined

  return (
    <Wraper>
      <h2>W czym możemy Ci pomóc?</h2>
      <ul>
        <li>
          <img src={phoneIcon} alt="phone-icon" /> {data.phoneNumber}
        </li>

        <li>
          <img src={clockIcon} alt="clock-icon" />

          {openHours[0].hours}

          <ExpandMoreIcon
            aria-describedby={id}
            className="expand-hours"
            onClick={handleClick}
          />

          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <OpeningHours />
          </Popover>
        </li>

        <li>
          <img src={adressIcon} alt="phone-icon" /> {data.adress}
        </li>
        <li>
          <img src={emailIcon} alt="email-icon" /> {data.email}
        </li>
      </ul>
    </Wraper>
  )
}
export default BusinessCard
