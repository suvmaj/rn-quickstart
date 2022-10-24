module.exports = [
  'module-resolver',
  {
    root: ['.'],
    alias: {
      '@root': './src',
      '@assets': './src/assets',
      '@components': './src/components',
      '@config': './src/config',
      '@constants': './src/constants',
      '@containers': './src/containers',
      '@contexts': './src/contexts',
      '@hooks': './src/hooks',
      '@locale': './src/locale',
      '@navigators': './src/navigators',
      '@services': './src/services',
      '@store': './src/store',
      '@styles': './src/styles',
      '@utils': './src/utils',
    },
  },
];
