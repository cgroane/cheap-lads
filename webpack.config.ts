import * as webpack from 'webpack';
import Dotenv from'dotenv-webpack';
const prod = process.env.NODE_ENV === 'production';


const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {

  return {
    mode: prod ? 'production' : 'development',
    entry: './src/index.tsx',
    output: {
    path: __dirname + '/dist/',
  },
  resolve: {
    alias: {
        '@mui/styled-engine': '@mui/styled-engine-sc'
    },
  },
  module: {
    rules: [ 
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ]
  },
  devtool: prod ? undefined : 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new MiniCssExtractPlugin(),
    new Dotenv({ path: __dirname+'/env/.env' })
  ],
  }
};
