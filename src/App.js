import React, {useEffect} from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {useSettings, withSettingsProvider} from '@contexts/settings';
import {RootNavigator} from '@navigators';
import {navigationRef} from '@utils/navigator.utils';
import {useThemeConfig} from '@hooks';
import i18n from '@locale/i18n';
import QueryProvider from '@containers/QueryProvider';

const App = () => {
  const [{locale}] = useSettings();
  const themeConfig = useThemeConfig();

  useEffect(() => {
    if (['ios', 'android'].includes(Platform.OS)) {
      SplashScreen.hide();
    }
  }, []);

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <QueryProvider>
      <SafeAreaProvider>
        <NavigationContainer ref={navigationRef} theme={themeConfig}>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryProvider>
  );
};

export default withSettingsProvider(App);
