import React, {useEffect} from 'react';
import {Platform} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import {WelcomeScreen} from '@containers';

const App = () => {
  useEffect(() => {
    if (['ios', 'android'].includes(Platform.OS)) {
      SplashScreen.hide();
    }
  }, []);

  return <WelcomeScreen />;
};

export default App;
