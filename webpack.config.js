const webpack = require('webpack');

module.exports = {
  entry:["./src/index.js"]
  , output: {
    path: __dirname + '/dist'
    , filename: 'bundle.js'
  }
  , module: {
  		loaders: [
  			{
  				test: /\.jsx?$/
  				, exclude: /node_modules/
  				, loader: 'babel'
  			}
  			, {
  				test: /\.css/
  				, exclude: /node_modules/
  				, loader: 'style-loader!css-loader'
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
    ]
}