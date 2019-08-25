const PrettierPlugin = require('prettier-webpack-plugin');

module.exports = {
  devServer: {
    port: 4000
  },
  configureWebpack: {
    plugins: [
      new PrettierPlugin({
        singleQuote: true,
        semi: false,
        tabWidth: 2,
        printWidth: 200
      })
    ]
  }
};
