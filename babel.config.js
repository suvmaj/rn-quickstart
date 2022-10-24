const babelModuleResolverConfig = require('./configs/babelModuleResolver.config');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [babelModuleResolverConfig],
};
