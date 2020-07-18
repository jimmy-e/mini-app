const merge = require('webpack-merge');
const StylelintPlugin = require('stylelint-webpack-plugin');
const common = require('./webpack.common.js');

const config = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    allowedHosts: [
      'localhost',
    ],
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
    open: true,
  },
  plugins: [new StylelintPlugin({ files: ['**/*.css', '**/*.less'] })],
});

module.exports = config;
