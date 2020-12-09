const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");
const basePath = __dirname;

module.exports = {
    context: path.join(basePath, "src"),
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    entry: {
        app: "./index.tsx",
        appStyles: [
            "./mystyles.scss"
        ],
    },
    output: {
        filename: "[name].[chunkhash].js",
        path: path.resolve(process.cwd(), "dist"),
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss?$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                exportLocalsConvention: "camelCase",
                                localIdentName: "[name]__[local]_[hash:base64:5]",
                                localIdentContext: path.resolve(__dirname, "src"),
                                localIdentHashPrefix: "my-custom-hash",
                            },
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ],
            },
            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                type: "asset/resource",
                // loader: "url-loader",
                // options: {
                //     limit: 5000,
                // },
            },
            {
                test: /\.html$/,
                loader: "html-loader",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', // output a dist
            template: 'index.html', // input de donde lee
            // hash: true,
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[chunkhash].css",
            chunkFilename: "[id].css",
        }),
    ],
    devServer: {
        port: 8082,
    },
};