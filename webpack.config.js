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
          , query: {
            presets: ["es2015"]
          }
  			}
  			, {
  				test: /\.scss/
  				, exclude: /node_modules/
  				, loader: 'style-loader!css-loader!sass-loader'
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
