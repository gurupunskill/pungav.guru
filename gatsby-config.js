const path = require("path");
// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(
 process.cwd(),
 "node_modules",
 "gatsby",
 "dist",
 "utils",
 "eslint-rules"
);

module.exports = {
  siteMetadata: {
    siteUrl: "https://pungav.guru",
    title: "pungav.guru",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "./static/assets/favicon.webp",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: "./static/assets",
      },
      __key: "assets",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: "./static/content",
      },
      __key: "content",
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        rulePaths: [gatsbyRequiredRules],
        stages: ["develop"],
        extensions: ["js", "jsx", "ts", "tsx"],
        exclude: ["node_modules", "bower_components", ".cache", "public"]
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        footnotes: true,
        gfm: true,
        plugins: [
          {
            resolve:`gatsby-remark-default-html-attrs`,
            options: {
              "h1": ["mdc-typography--headline1", "text-content--heading"],
              "h2": ["mdc-typography--headline2", "text-content--heading"],
              "h3": ["mdc-typography--headline3", "text-content--heading"],
              "h4": ["mdc-typography--headline4", "text-content--heading"],
              "h5": ["mdc-typography--headline5", "text-content--heading"],
              "h6": ["mdc-typography--headline6", "text-content--heading"],
              "p": ["mdc-typography--body1", "text-content--body"],
              "list": ["mdc-typography--body1", "text-content--body"],
              "list[ordered]": ["mdc-typography--body1", "text-content--body"]
            }
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.tsx`),
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: 'black'
      }
    },
  ]
};
