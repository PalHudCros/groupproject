const webpack = require('webpack');
const DotenvPlugin = require('webpack-dotenv-plugin');

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
            presets: ["es2015", "react"]
          }
  			}
  			, {
  				test: /\.scss/
  				, exclude: /node_modules/
  				, loader: 'style-loader!css-loader!sass-loader'
  			}
        , { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      , { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
      , {
        test: /\.html$/
        , loader: "html"
      }
      , {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
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
        , new DotenvPlugin({
        path: './.env'
        })
    ]
    , node: {fs: "empty"}
}
