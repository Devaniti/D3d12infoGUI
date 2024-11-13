const fs = require('fs')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    assets: './website-assets-webpack.js',
    shared: './website-shared-webpack.js',
    index: {
      import:'./website-index-webpack.js',
      dependOn: 'shared'
    },
    id: {
      import:'./website-id-webpack.js',
      dependOn: 'shared'
    },
    feature_table: {
      import:'./website-feature-table-webpack.js',
      dependOn: 'shared'
    }
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, "../website"),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-loader', 'template-ejs-loader'],
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext]'
        }
      },
      {
        test: /\.json$/,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext]'
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './assets/html_website/index.html',
      filename: 'index.html',
      chunks: ['assets', 'shared', 'index']
    }),
    new HtmlWebpackPlugin({
      template: './assets/html_website/ID.html',
      filename: 'ID.html',
      chunks: ['assets', 'shared', 'id']
    }),
    new HtmlWebpackPlugin({
      template: './assets/html_website/about.html',
      filename: 'about.html',
      chunks: ['assets']
    }),
    new HtmlWebpackPlugin({
      template: './assets/html_website/FeatureTable.html',
      filename: 'FeatureTable.html',
      chunks: ['assets', 'shared', 'feature_table']
    }),
  ]
}
