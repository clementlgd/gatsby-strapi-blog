import React from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image'

const Retailer = ({ retailerName, link, date, hour }) => (
  <div style={{display: 'flex', justifyContent: 'space-between'}}>
    <p>{retailerName}</p>
    <div style={{display: 'flex'}}>
      <p>{date} </p>
      <p> à {hour}</p>
    </div>
    <a href={link} target="_blank">Acheter</a>
  </div>
)

export default Retailer