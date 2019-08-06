const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/'
}
module.exports = {
  entry: {
    app: `${PATHS.src}/index.js`
  },
  output:{
    path: PATHS.dist,
    filename: `${PATHS.src}js/[name].[hash].js`,
    publicPath: '/'
    

  },
  module: {

    rules: [
      {
        test:/\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'sass-loader',
            options: {sourceMap: true}
          }
        ]
        
      }
    ]
  },
  devServer: {
    overlay: true
  }
}