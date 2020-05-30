require("dotenv").config()
const snipcartTranslation = require("./src/assets/snipcart/snipcartTranslation")
// const snipcartCustomFields = require("./src/assets/snipcart/snipcartCustomsFields")

module.exports = {
  siteMetadata: {
    title: `Król Pik - Salon Rowerowy`,
    description: `Król Pik - Salon Rowerowy Tarnobrzeg. Rowery, części, akcesoria, serwis`,
    author: `w.walczak93@gmail.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-snipcart-advanced`,
      options: {
        version: "3.0.12",
        defaultLang: "en",
        currency: "PLN",
        openCartOnAdd: false,
        locales: {
          en: snipcartTranslation,
        },
        innerHTML: `
        <billing section="bottom">

        <fieldset class="snipcart-form__set">
          <div className="snipcart-form__field">
            <snipcart-label  class="snipcart__font--tiny"   for="phone"  >
                Nr telefonu
                </snipcart-label>
              <snipcart-input name="phone"></snipcart-input>
          </div>

          <div class="snipcart-form__field-checkbox">
              <snipcart-checkbox name="subscribeToNewsletter"></snipcart-checkbox>
              <snipcart-label
                class="snipcart__font--tiny snipcart-form__label--checkbox"
                for="subscribeToNewsletter"
              >
                Chcę otrzymywać informacje o promocjach.
              </snipcart-label>
            </div>
        </fieldset>
        </billing>
        `,
      },
    },
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            subsets: [`latin-ext`],
            variants: [`400`, `600`, `700`, `900`],
          },
          {
            family: `Lato`,
            subsets: [`latin-ext`],
            variants: [`400`, `600`, `700`, `900`],
          },
          {
            family: `Roboto`,
            subsets: [`latin-ext`],
            variants: [`400`, `600`, `700`, `900`],
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Król Pik - Salon Rowerowy`,
        short_name: `Król Pik`,
        lang: `fr`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/assets/icons/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
