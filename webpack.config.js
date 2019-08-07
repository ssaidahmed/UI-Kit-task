
const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
  assets: 'assets/'
}

const PAGES_DIR = `${PATHS.src}/pug/pages/`;

const PAGES = fs.readdirSync(PAGES_DIR, 'utf8').filter(filename => filename.endsWith('.pug'));

module.exports = {
  entry: {
    app: `${PATHS.src}/index.js`
  },
  output:{
    path: PATHS.dist,
    filename: `${PATHS.assets}js/[name].[hash].js`,
    publicPath: '/'
    

  },
  module: {

    rules: [
      {
        test:/\.pug$/,
        loader: 'pug-loader',
      },
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

  plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].[hash].css`,
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new CopyWebpackPlugin([
      { from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img` },
      { from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts` },
      { from: `${PATHS.src}/static`, to: '' },
    ]),
    ...PAGES.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page.replace(/\.pug/, '.html')}`
    }))
  ],
  devServer: {
    overlay: true
  }
}