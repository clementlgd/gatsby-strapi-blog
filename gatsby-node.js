
const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  // Query for nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }
      
      return result;
    })
  )
});

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  
  // const getArticles = makeRequest(graphql, `
  //   {
  //     allStrapiArticle {
  //       edges {
  //         node {
  //           id
  //         }
  //       }
  //     }
  //   }
  //   `).then(result => {
  //   // Create pages for each article.
  //   result.data.allStrapiArticle.edges.forEach(({ node }) => {
  //     createPage({
  //       path: `/articles/${node.id}`,
  //       component: path.resolve(`src/templates/article.js`),
  //       context: {
  //         id: node.id,
  //       },
  //     })
  //   })
  // });

  const getDrops = makeRequest(graphql, `
  {
    allStrapiDrops {
      edges {
        node {
          id
        }
      }
    }
  }
  `).then(result => {
  // Create pages for each article.
  result.data.allStrapiDrops.edges.forEach(({ node }) => {
    createPage({
      path: `/drops/${node.id}`,
      component: path.resolve(`src/templates/article.js`),
      context: {
        id: node.id,
      },
    })
  })
});
  
  // Query for articles nodes to use in creating pages.
  return getDrops;
};