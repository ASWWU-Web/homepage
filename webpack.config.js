var webpack = require('webpack');
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/main.ts',
  output: {
    path: __dirname + '/dist',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
    	{test: /\.ts$/, loader: 'ts-loader'}
    ]
  },
  resolve: {
    extensions: [".js", ".ts"]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
  	/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
  	path.resolve(__dirname, '../')
    ),
   /*new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)@angular/,
        path.resolve('./'),
        {}
    ),*/
    new HtmlWebpackPlugin({
	    template: __dirname + '/index.html'
    })
  ]
};


