import React from "react"
import styled from "styled-components"

import data from "../assets/data"
import phoneIcon from "../assets/icons/phone-call-icon.svg"
import emailIcon from "../assets/icons/email-icon.svg"
import clockIcon from "../assets/icons/clock.svg"
import adressIcon from "../assets/icons/location-pin.svg"

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
`

const BusinessCard = () => {
  return (
    <Wraper>
      <h2>W czym możemy Ci pomóc?</h2>
      <ul>
        <li>
          <img src={phoneIcon} alt="phone-icon" /> {data.phoneNumber}
        </li>
        <li>
          <img src={clockIcon} alt="clock-icon" /> {data.openingHours}
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
