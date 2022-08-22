const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
	output: {
		publicPath: "auto",
	},
	devServer: {
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.js|jsx$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
						options: { minimize: true },
					},
				],
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader", "postcss-loader"],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
				type: "asset",
			},
		],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html",
		}),
	],
};
