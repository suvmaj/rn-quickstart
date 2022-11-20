import {AppRegistry, Platform} from 'react-native';
import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler';
import 'intl-pluralrules';

import '@locale/i18n';
import {jsExceptionHandler, nativeExceptionHandler} from '@utils/common.utils';

import App from './App';

const appName = 'rnQuickstart';

setJSExceptionHandler(jsExceptionHandler, true);
setNativeExceptionHandler(nativeExceptionHandler, true, true);

AppRegistry.registerComponent(appName, () => App);

if (Platform.OS === 'web') {
  AppRegistry.runApplication(appName, {
    rootTag: document.getElementById('root'),
  });
}
