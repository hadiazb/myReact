const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const path = require('path');

module.exports = {
	entry: {
		app: path.resolve(__dirname, './src/index.js'),
	},
	output: {
		filename: './[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
	mode: 'development',
	devServer: {
		hot: true,
		open: true,
		port: 8000 || 3000,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'myReact',
			template: path.resolve(__dirname, './src/index.html'),
		}),
	],
};
