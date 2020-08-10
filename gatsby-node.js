const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

//Método para add slug nos posts
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Verificar se o tipo do arquivo é markdown
  if (node.internal.type === "MarkdownRemark") {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const slug = createFilePath({ //mudar o nome da const para o que vc quer buscar
      node,
      getNode,
      basePath: "pages", // irá criar pages
    })

    // Cria um novo campo slug dentro de cada post
    createNodeField({
      node,
      name: "slug",
      value: `/${slug.slice(12)}`, // o slug é o nome inteiro dado ao post, utilizar slice p/ quebra e trazer somente o nome comçando a partir do numero  12
    }) 
  }
}

//Método para criação de página
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  //O graphql trará a query para busca dos slugs e a partir do slug criar a página
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => { //assincrono assim que terminar de buscar os nodes fará uma outra açao
    result.data.allMarkdownRemark.edges.forEach(({ node }) => { // passará por cada node e fará a criaçao da page
      createPage({
        path: node.fields.slug, // caminho, nome do node
        component: path.resolve("./src/templates/blog-post.js"), //template do post fazer o import do path ele pega o caminho correto da pasta
        context: { // permite passar qq dado para o component, por exemplo, timetoRead, slug
          slug: node.fields.slug
        }
      })
    })
  })
}