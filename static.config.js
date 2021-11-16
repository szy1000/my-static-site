import path from 'path'
import axios from 'axios'
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

export default {
  getSiteProps: () => ({
    title: 'ss'
  }),
  devServer: {
    port: 9000
  },
  getRoutes: async () => {
    const { data: posts } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )

    return [
      {
        path: '/',

      },
      {
        path: '/blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          template: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
    ]
  },
  module: {

  },
  plugins: [

    [
      "react-static-plugin-less", {

      }
    ],
    [
      "react-static-plugin-css-modules", {
      modules: true, // set true by default
      localIdentName: '[path][name]__[local]--[hash:base64:5]',
    }
    ],
    ['react-static-plugin-styled-components'],


    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
