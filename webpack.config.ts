import webpack from "webpack";
import path from "path";
import TsConfigPathsPlugin from "tsconfig-paths-webpack-plugin";

const buildPath = path.resolve(__dirname, "dist");

export default {
	entry: "./client/Client.ts",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: [ ".js", ".ts", ".jsx", ".tsx", ".json" ],
		plugins: [ new TsConfigPathsPlugin() ]
	},
	optimization: {
		minimize: true
	},
	output: {
		filename: "client.js",
		path: path.resolve(buildPath, "client")
	},
	target: "node"
};
