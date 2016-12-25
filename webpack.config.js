var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('style.css');

var debug = (process.env.NODE_ENV !== 'production');
var entryFile = path.resolve(__dirname, 'client/main.js');
var publicPath = path.resolve(__dirname, 'public');

module.exports = {
	entry: entryFile,
	output: {
		path: publicPath,
		publicPath: "/public/",
		filename: 'bundle.js'
	},
	devtool: debug ? 'inline-sourcemap' : null, // 'source-map' to create a separate file for the map
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react', 'stage-0'],
					plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
				}
			},
			{
				test: /\.scss$/,
				loader: extractCSS.extract(['css', 'sass'])
			}
		]
	},
	plugins: debug 
		? [ extractCSS ]
		: [
		extractCSS,
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: { warnings: false },
			output: { comments: false },
		})
	]
};
