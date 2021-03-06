const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist/"),
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
            },
        }, {
            test: /\.svelte?$/,
            use: {
                loader: "svelte-loader",
            },
        }, {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        }, {
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: ["file-loader"],
        }, ],
    },
    resolve: {
        extensions: [".js", ".svelte"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html"),
        }),
        new CopPlugin({
            patterns: [{
                from: path.resolve(__dirname, "public", "images"),
                to: "images",
            }, ],
        }),
    ],
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, "dist/todo"),
        hot: true,
    },
};