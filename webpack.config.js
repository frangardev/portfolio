const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist'),
        // path: "/"
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias:{
            //Estructura de archivos
            '@components': path.resolve(__dirname, 'src/components/'),
            '@app': path.resolve(__dirname, 'src/app/'),
            '@data': path.resolve(__dirname, 'src/data/'),
            '@style': path.resolve(__dirname, 'src/styles/')
        }
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',                
                }
            },
            {
                test: /\.html$/,
                use: [
                    { loader: 'html-loader' }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },

        // Configuración para trabajar con modulos css
            // {
            //     test: /\.css$/i,
            //     // exclude: /node_modules/, // excuido por normalize
            //     use: [
            //     'style-loader',
            //     {
            //         loader: 'css-loader',
            //         options: {
            //         modules: true,
            //         },
            //     },
            //     ],
            // }

            // {
            //     test: /\.(woff|woff2|eot|ttf|svg)$/,
            //     loader: 'url-loader',
            //     options: {
            //         publicPath: './fonts/',
            //         name: './fonts/[name].[ext]',
            //         limit: 1000
            //     }
            // }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CleanWebpackPlugin()
    ],
    optimization:{
        minimizer: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ]
    }
}
