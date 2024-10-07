const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: 'src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'template.html',
      filename: 'index.html',
      title: 'A Deep Understanding of Git',
      inject: 'head',
      scriptLoading: 'defer'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|jpeg|png|webp)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2)/,
        type: 'asset/resource'
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  }
}