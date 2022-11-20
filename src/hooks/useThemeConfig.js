import {useMemo} from 'react';
import {useColorScheme} from 'react-native';

import {useSettings} from '@contexts/settings';
import {getThemeConfig} from '@utils/theme.utils';

const useThemeConfig = () => {
  const [{theme: currentThemeName}] = useSettings();
  const isDarkMode = useColorScheme() === 'dark';

  return useMemo(
    () => getThemeConfig(currentThemeName, isDarkMode),
    [currentThemeName, isDarkMode],
  );
};

export default useThemeConfig;
