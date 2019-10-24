module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-dromedar',
      options: {
        url: 'https://workshop.dromedar.design',
        api: 'https://api.dromedar.design/v1',
        author: 'Dromedar Design',
        prismic: 'dromedar-design',
        language: 'hu',
        title: 'Dromedar Design',
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    }
  ],
}
