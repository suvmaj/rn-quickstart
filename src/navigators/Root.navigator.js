import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {WelcomeScreen} from '@components/screens';
import {ROOT_NAVIGATOR_SCREEN_NAMES} from '@constants/navigator.constants';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        options={{headerShown: false}}
        name={ROOT_NAVIGATOR_SCREEN_NAMES.WELCOME_SCREEN}
        component={WelcomeScreen}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
