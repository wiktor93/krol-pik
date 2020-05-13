const slug = require("slugify")

const slugify = string =>
  slug(string, {
    lower: true,
    remove: /[*+~.()'"!?:@]/g,
  })

module.exports = slugify
