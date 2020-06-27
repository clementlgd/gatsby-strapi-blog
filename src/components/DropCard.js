import React from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image'

const DropCard = ({ id, modelName, brandName, mainImage }) => (
    <Link to={`/drops/${id}`}>
    <li style={{textDecoration: 'none', listStyleType: 'none'}} key={id}>
      <div style={{background: '#e6e6e6', margin: '20px 0', padding:'20px'}}>
        <h2>{modelName}</h2>
        <p>{brandName}</p>
        <Img fixed={mainImage.childImageSharp.fixed} />
      </div>
    </li>
  </Link>
)

export default DropCard