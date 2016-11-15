const webpack = require('webpack');
const DotenvPlugin = require('webpack-dotenv-plugin');

module.exports = {
  entry: {
    'shop/shop': __dirname + "/src/shop/index.jsx",
    'driver/driver': __dirname + "/src/driver/index.jsx",
    'admin/admin':__dirname + "/src/admin/index.jsx" }
  , output: {
    path: __dirname + '/dist'
    ,  filename: "[name].js" }
  , module: {
  		loaders: [
  			{
  				test: /\.jsx?$/
  				, exclude: /node_modules/
  				, loader: 'babel'
          , query: {
            presets: ["es2015", "react"]
          }
  			}
  			, {
  				test: /\.scss/
  				, exclude: /node_modules/
  				, loader: 'style-loader!css-loader!sass-loader'
  			}
        , {
          test: /\.(png|jpe?g)$/
          , loader: 'file-loader?name=images/[name].[ext]'
        }
      ]
  }
  , resolve: {
    extensions: ['', '.js', '.jsx']
  }
  , plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jquery: "jQuery"
        })
        , new DotenvPlugin({
        path: './.env'
        })
    ]
    , node: {fs: "empty"}
}
