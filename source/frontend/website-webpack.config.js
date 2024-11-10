const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    shared: './website-shared-webpack.js',
    index: {
      import:'./website-index-webpack.js',
      dependOn: 'shared'
    },
    id: {
      import:'./website-id-webpack.js',
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
        use: 'html-loader',
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
      chunks: ['shared', 'index']
    }),
    new HtmlWebpackPlugin({
      template: './assets/html_website/id.html',
      filename: 'id.html',
      chunks: ['shared', 'id']
    }),
    new HtmlWebpackPlugin({
      template: './assets/html_website/about.html',
      filename: 'about.html',
      chunks: ['shared']
    }),
  ]
}
