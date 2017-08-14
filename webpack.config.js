const path = require('path');  //path is already a part of node

module.exports = {
	entry: {
		App: "./app/public/assets/scripts/App.js",
		Vendor: "./app/public/assets/scripts/Vendor.js"
	},
	output: {
		path: path.join(__dirname, "./app/public/temp/scripts"),
		filename: "[name].js"
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				// loader: 'babel',
				query: {
					// presets: [require.resolve('babel-preset-es2015')]
					presets: ['es2015']
				},
				// only apply babel to JS files, but not every single JS file
				test: /\.js$/,
				exclude: /node_modules/
			}
		]
	}
};