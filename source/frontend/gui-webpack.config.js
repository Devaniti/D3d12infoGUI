const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, argv) => {
  const isDevServer = argv.env.WEBPACK_SERVE;

  return {
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
                if (attribute === 'src' && value == 'reports.js') {
                  // Do not include reports.js when packing for GUI
                  // But do include it when running dev server
                  return isDevServer;
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
}
