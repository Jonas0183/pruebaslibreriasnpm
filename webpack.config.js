const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry : {
            app : [
                './src/app/index.js',
                "@babel/polyfill/noConflict"
            ]
    },
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'js/app.bundle.js'
    },
    devtool : 'source-map',
    module : {
        rules : [
            {
                test :  /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                exclude: /node_modules/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'assets/images',
                      publicPath: 'assets/images'
                    }
                  }
                ]                  
              },
            {                       
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: "html-loader"
            }
        ]
    },

    plugins : [
        new MiniCssExtractPlugin({
            filename: 'css/style.scss',
          }),

        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify : {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
      }
};