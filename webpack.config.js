const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: './index.js',
    },
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/',                          // New
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),    // New
    },

    module: {
        rules: [
            { 
                test: /\.jsx?$/,         // Match both .js and .jsx files
                exclude: /node_modules/, 
                loader: "babel-loader"
            },
            {
                test: /\.(sass|scss)$/i,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [autoprefixer()]
                            }
                        },
                        'sass-loader'
                    ]
                })
            }
        ]
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    plugins: [
      new ExtractTextPlugin({
        filename: 'css/styles.css',
        allChunks: true,
      }),
      new HtmlWebpackPlugin({
        template: __dirname + '/src/index.html',
      })
    ]


};