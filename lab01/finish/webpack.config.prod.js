import HtmlWebpackPlugin from 'html-webpack-plugin'; //installed via npm
import webpack from 'webpack'; //to access built-in plugins
import { resolve } from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';


const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

export default {
  context: resolve(__dirname, 'src'),
  devtool: "source-map",
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    // the output bundle

    path: resolve(__dirname, 'dist'),

    publicPath: '/'
    // necessary for HMR to know where to load the hot update chunks
  },

  devServer: {

    contentBase: resolve(__dirname, 'dist'),
    // match the output path

    publicPath: '/'
    // match the output `publicPath`
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
  ]
};

