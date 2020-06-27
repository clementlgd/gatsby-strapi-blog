import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import DropCard from "../components/DropCard"

const IndexPage = ({ data }) => (
  <Layout>
    {data.allStrapiDrops.edges.map(document => (
      <DropCard 
        id={document.node.id} 
        modelName={document.node.model_name}
        brandName={document.node.brand_name}
        mainImage={document.node.main_image}
      />
    ))}
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
          main_image {
            childImageSharp {
              fixed(width: 200, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`

