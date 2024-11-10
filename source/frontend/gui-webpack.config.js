const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    default: './gui-webpack.js'
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, "../GUI/html")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        options: {
          sources: {
            urlFilter: (attribute, value, resourcePath) => {
              console.log(attribute, value, resourcePath);
              if (attribute === 'src' && value == 'reports.json') {
                return false;
              }
              return true;
            }
          }
        }
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
          filename: '[name][ext]'
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './assets/html_gui/index.html',
      filename: 'index.html'
    })
  ]
}
