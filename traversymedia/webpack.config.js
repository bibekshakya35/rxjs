module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname+'/dist',
		filename:'app.bundle.js'
	},
	module: {
		loaders: [{
			exclude: '/node_modules/',
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
		}]
	}
}