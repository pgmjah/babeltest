const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
const fs = require('fs'); // to check if the file exists

module.exports = (env) => {
	return {
		devtool: 'inline-source-map',
		mode: 'development',
		entry: './src/test.js',
		output: {
			publicPath: '/',
			path: path.resolve(__dirname, 'build'),
			filename: 'bundle.js',
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader',
					},
				},
				{
					test: /\.css$/i,
					use: ['style-loader', 'css-loader'],
				},
				{
					test: /\.html$/,
					use: [
						{
							loader: 'html-loader',
						},
					],
				},
			],
		},
		plugins: [
			new HtmlWebPackPlugin({
				template: './index.html',
				filename: 'index.html',
				title:'babel test app',
			})
		],
	};
};
