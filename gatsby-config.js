module.exports = {
  siteMetadata: {
    title: "Gatsby Productions Costa del Sol",
    description: "Luxury events and entertainment on the Costa del Sol",
    author: "Gatsby Productions",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID || "xf6dufmw",
        dataset: process.env.SANITY_DATASET || "production",
        apiVersion: "2023-05-03",
        token: process.env.SANITY_TOKEN,
        watchMode: true,
      },
    },
  ],
};
