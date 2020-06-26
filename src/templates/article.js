import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout' 

const ArticleTemplate = ({ data }) => (
  <Layout>
    {/* <h1>{data.strapiArticle.title}</h1>
    <Img fixed={data.strapiArticle.image.childImageSharp.fixed}/>
    <p>{data.strapiArticle.content}</p> */}
  </Layout>
)

export default ArticleTemplate

// export const query = graphql`
//   query ArticleTemplate($id: String!) {
//     strapiArticle(id: {eq: $id}) {
//       title
//       content
//       image {
//         childImageSharp {
//           fixed(width: 400, height: 225) {
//             ...GatsbyImageSharpFixed
//           }
//         }
//       }
//     }
//   }
// `