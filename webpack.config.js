var path = require('path')
var webpack = require('webpack')
// Kettan:
// webpack bundle css into js by default.
// For convenience of representing usual scenario we use css,
// this example uses ExtractTextPlugin to sepreate css out from bundled js file.
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  // Kettan:
  // List all files are waiting to be compiled under config.entry
  // The path should start from the location of webpack.config.js
  entry: {
    onejs: './src/oneJS/vvv.js',
    multijs: ['./src/multiJS/main2.js', './src/multiJS/main.js'],
    cssjs: ['./src/cssJS/my.css', './src/cssJS/index.js'],
    cssinjs: './src/cssInJS/cij.js',
    onlycss: ['./src/onlyCSS/o1.css', './src/onlyCSS/o2.css'],
    vue: './src/vue/main.js',
    mylib: './src/mylib/index.js'
  },
  // Kettan:
  // [name] correspond to config.entry's key
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].build.js',
    // Kettan:
    // Export as "umd" format, so your lib can be used on browsers
    // example file: './src/mylib/index.js'
    libraryTarget: "umd"
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file',
        query: {
          name: '[name].[ext]?[hash]'
        }
      },
      // Kettan:
      // Add '?minimize' right after 'css-loader' to compress css file
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
            fallbackLoader: "style-loader",
            loader: "css-loader?minimize"
        })
      }
    ]
  },
  // Kettan:
  // Add 'ExtractTextPlugin' into plugins array
  // to let webpack know css should output as a individual file
  plugins: [
    new ExtractTextPlugin("[name].css")
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ])
}
