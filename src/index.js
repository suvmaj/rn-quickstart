import {AppRegistry, Platform} from 'react-native';

import App from './App';

const appName = 'rnQuickstart';

AppRegistry.registerComponent(appName, () => App);

if (Platform.OS === 'web') {
  AppRegistry.runApplication(appName, {
    rootTag: document.getElementById('root'),
  });
}
