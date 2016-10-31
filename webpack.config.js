const webpack = require('webpack');

module.exports = {
  entry: { shop: "./src/shop/index.jsx", driver: "./src/driver/index.jsx", admin:"./src/admin/index.jsx" }
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
