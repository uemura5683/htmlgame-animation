const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/scss/style.scss',
    module: {
        rules: [
            {
                test: /\.(css|sass|scss)/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            //ここから追加
            {
                test: /\.(png|jpg|gif|svg)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            outputPath : 'images',
                            publicPath: './images'
                        }
                    },
                    'image-webpack-loader',
                ]
            },            
            {
                test: /\.pug/,
                use: [
                    {
                        loader: 'html-loader'
                    },
                    {
                        loader: 'pug-html-loader',
                        options: {
                            pretty: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.pug',
            filename: 'index.html'
        }),
        new CleanWebpackPlugin()
    ]
}