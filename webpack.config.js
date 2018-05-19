const path = require('path')
const webpack = require('webpack')
module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    `${__dirname}/app/main.js`,
    ],
  output: {
    filename: '[name].bundle.js',
    path: `${__dirname}/build`,
    publicPath: '/build/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 启用 HMR
    new webpack.NamedModulesPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react', 'es2015']
          }
        }
      }
    ]
  },
  devServer: {
    hot: true,
    host: 'localhost',
    port: 3000,
    contentBase: path.resolve(__dirname, 'build')
  }
}