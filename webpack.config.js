'use strict'
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : "source-map",
  entry: "./js/script.js", //entry script js file 
  output: {
    path: __dirname + "/js",
    filename: "script.min.js"
  },
  plugins: debug ? [/*if not production do nothing*/] : [
	/*if production do below */
	new UglifyJSPlugin({ sourceMap: true }), //to minify your js code , remove comments
	//new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')})
  ]
};