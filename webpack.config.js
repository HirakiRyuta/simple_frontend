const { VueLoaderPlugin } = require("vue-loader");
const path = require('path');

module.exports = {
  entry: './src/main.ts',
  output: {
    filename: 'main.js',
    path: __dirname + '/dist'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve('src')
    }
  },
  module: {
    rules: [
      { test: /\.vue$/, loader: "vue-loader" },
      {
        test: /\.ts?$/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'ts-loader' }
        ],
        exclude: /node_modules/,
        // options: { appendTsSuffixTo: [/\.vue$/] }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'vue-style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        use: 'file-loader',
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};