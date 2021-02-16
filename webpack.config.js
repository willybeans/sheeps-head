const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry:{
		main: './src/index.tsx',
		vendor: [
			'core-js',
			'react',
			'react-dom',
		]
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				use:[
					{
						loader: 'babel-loader',
						options: {
							presets: [
								'@babel/preset-env',
								'@babel/preset-react'
							]
						}
					},
					{	
						loader: 'ts-loader',
					}
				],
				exclude: /node_modules/,
			},
		  {
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
		]},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
	},
	plugins: [
		new HtmlWebPackPlugin({
			title: 'Development',
			template: './src/index.html',
		}),
	],
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
	},
}
