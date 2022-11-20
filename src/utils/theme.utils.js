import {themes} from '@styles/themes';

export const getThemeConfig = (currentThemeName, isDarkMode) => {
  const fallbackTheme = isDarkMode ? themes.DARK : themes.DEFAULT;

  return themes[currentThemeName] || fallbackTheme;
};
