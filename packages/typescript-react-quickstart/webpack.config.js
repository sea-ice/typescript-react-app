let path = require('path')
let webpack = require('webpack')
let ExtractTextPlugin = require('extract-text-webpack-plugin')
let CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    'home': path.resolve(__dirname, './src/index.tsx')
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    inline: true,
    hot: true,
    publicPath: '/',
    contentBase: './dist',
    open: true,
    port: 8081, // must sync with interface_addr in src/config/index.ts
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@src': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [{
      test: /\.(ts|tsx)$/,
      use: ['awesome-typescript-loader'],
      exclude: /node_modules/
    }, {
      test: /\.js$/,
      use: ['source-map-loader'],
      enforce: 'pre'
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader?modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]']
      })
    }, {
      test: /\.(jpe?g|png|gif)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }]
    }]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([{
      from: './src/index.html',
      to: path.resolve(__dirname, './dist')
    }])
  ]
}
