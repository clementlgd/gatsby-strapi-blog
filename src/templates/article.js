import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout' 

import Retailer from '../components/Retailer'

const ArticleTemplate = ({ data }) => {
  console.log(data.strapiDrops)
  return (
    <Layout>
      <h1>{data.strapiDrops.modele_name}</h1>
      <Img fixed={data.strapiDrops.main_image.childImageSharp.fixed}/>
      <p>{data.strapiDrops.brand_name}</p>
      {data.strapiDrops.retailer_info.map(item => (
        <Retailer 
          retailerName={item.retailer.retailler_name}
          link={item.link}
          date={item.drop_date}
          hour={item.drop_hour}
        />
      ))}
    </Layout>
  )
}

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiDrops(id: {eq: $id}) {
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
      retailer_info {
        retailer {
          retailler_name
          id
        }
        link
        drop_date
        drop_hour
        id
      }
    }
  }
`