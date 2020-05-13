const path = require(`path`)
const slugify = require("./src/utils/slugify")
const dummyProducts = require("./src/assets/dummies/dummyProducts")

exports.createPages = ({ graphql, actions }) => {
  const ProductPageLayout = path.resolve(`src/layouts/ProductPageLayout.js`)

  // Create product pages.
  dummyProducts.forEach(product => {
    const slug = slugify(product.productName)
    const category = slugify(product.category)

    actions.createPage({
      // Path for this page — required
      path: `sklep/${category}/${slug}`,
      component: ProductPageLayout,
      context: {
        id: product.id,
      },
    })
  })
}
