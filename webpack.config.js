const path = require("path");
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = ({ mode } = { mode: "development" }) => {
    console.log(`mode is: ${mode}`);

    return {
            mode,
            entry: "./src/index.js",
            devServer: {
                client: { 
                    overlay: false,
                    logging: 'warn' },
            },
            output: {
                publicPath: "/",
                path: path.resolve(__dirname, "build"),
                filename: "bundle.js"
            },
            module: {
                rules: [
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        use: "babel-loader"
                    },
                    // {
                    //     test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                    //     exclude: /node_modules/,
                    //     use: ["url-loader", "file-loader"],
                    // },
                    {
                        test: /\.(gif|png|jpe?g)$/,
                        use: [
                          {
                            loader: 'file-loader',
                            options: {
                              name: '[name].[ext]',
                              outputPath: 'assets/images/'
                            }
                          }
                        ]
                      },
                    {
                        test: /\.sa?css$/,
                        exclude: /node_modules/,
                        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader", "sass-loader"]
                    },
                    {
                        test: /\.css$/i,
                        exclude: /node-modules/,
                        use: [
                            'style-loader',
                            'css-loader'
                        ]
                    }
                ]
            },
            plugins: [
                new HtmlWebpackPlugin({template: "./public/index.html"}),
                new ReactRefreshPlugin(),
                new MiniCssExtractPlugin(),
            ],
        }

};