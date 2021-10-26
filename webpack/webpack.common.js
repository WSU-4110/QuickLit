const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '..', './src/js/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.m?jsx?$/,
        resolve: {
          fullySpecified: false
        }        
      },
      {
        test: /\.scss$/i,
        use: [
            'style-loader', 
            'css-loader',
            'sass-loader'                    
        ]
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
          }
        }],
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/html/index.html'),
    }),
  ],
  stats: 'errors-only',
  devServer: {
    historyApiFallback: true,
  },
}