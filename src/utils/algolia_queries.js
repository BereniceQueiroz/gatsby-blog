const postQuery = `{
  posts: allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }){
    edges {
      node {
        objectID: id
        fields {
          slug
        }
        frontmatter {
          title
          background
          category
          date_timestamp: date
          date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
          description
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    date_timestamp: parseInt(
      (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)
    ),
    ...rest,
  }))

const queries = [ 
  { 
    query: postQuery,//nome da query acima
    transformer: ({ data }) => flatten(data.posts.edges), // dado que será enviado para o Algolia
    indexName: `dev_Posts`, //nome dado ao caderno criado no algolia
    settings: { 
      attributesToSnippet: [ `excerpt:20`] //busca de 20 em 20
    }, 
  }
]


module.exports = queries