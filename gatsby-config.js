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
        author: 'Dromedar Design',
        prismic: 'dromedar-design',
        language: 'hu',
        title: 'Dromedar Design',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Dromedar Design',
        short_name: 'DD',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#805ad5',
        display: 'standalone',
        icon: 'src/favicon.png',
      },
    },
  ],
}
