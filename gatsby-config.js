const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"

require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-dromedar',
      options: {
        url: process.env.DD_URL,
        api: process.env.DD_API,
        author: '@juhgabor',
        prismic: 'dromedar-design',
        language: 'hu',
        title: 'Dromedar Design',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Webfejlesztő Workshop Kecskemét',
        short_name: 'WWK',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#805ad5',
        display: 'browser',
        icon: 'src/favicon.png',
      },
    },
  ],
}
