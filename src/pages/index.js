import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  <Layout>
    <ul>
      {data.allStrapiDrops.edges.map(document => (
        <Link to={`/drops/${document.node.id}`}>
          <li style={{textDecoration: 'none', listStyleType: 'none'}} key={document.node.id}>
            <div style={{background: '#e6e6e6', margin: '20px 0', padding:'20px'}}>
              <h2>{document.node.model_name}</h2>
              <p>{document.node.brand_name}</p>
              {/* <Img fixed={document.node.image.childImageSharp.fixed} /> */}
            </div>
          </li>
        </Link>
      ))}
    </ul>

    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiDrops {
      edges {
        node {
          id
          brand_name
          drop_date
          drop_hour
          name_color
          model_name
          retail_price
        }
      }
    }
  }
`

