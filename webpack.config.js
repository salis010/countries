const path = require('path');

module.exports = {
	entry: path.join(__dirname, 'src', 'index.js'),
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'index_bundle.js'
	},
	module: {
	rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
		]
	},
	devtool: 'source-map',
	mode: 'development'
}