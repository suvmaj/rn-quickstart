import {DefaultTheme, DarkTheme} from '@react-navigation/native';

const palette = {
  white: '#FFFFFF',
  black: '#000000',
  transparent: '#00000000',
};

const themes = {
  DEFAULT: {
    dark: false,
    colors: {
      ...DefaultTheme.colors,
    },
  },
  DARK: {
    dark: true,
    colors: {
      ...DarkTheme.colors,
    },
  },
};

export {themes, palette};
