const webpack = require('webpack');

module.exports = {
  entry: { shop: "./src/shop/index.js", driver: "./src/driver/index.js", admin:"./src/admin/index.js" }
  , output: {
    path: __dirname + '/dist/chunks'
    ,  filename: "[name].js" }
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
        , new webpack.optimize.CommonsChunkPlugin({
          name: 'init',
          filename: 'init.js',
          minChunks: 3,
          chunks:['shop', 'driver', 'admin']
        })
    ]
}
