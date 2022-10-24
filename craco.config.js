const babelModuleResolverConfig = require('./configs/babelModuleResolver.config');
const webpack = require('webpack');

module.exports = {
  babel: {
    plugins: [babelModuleResolverConfig],
  },
  webpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(
          process.env.NODE_ENV || 'development',
        ),
        __DEV__: process.env.NODE_ENV !== 'production',
      }),
    ],
  },
};
