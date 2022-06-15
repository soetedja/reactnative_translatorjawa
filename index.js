import axios from 'axios';

// "android": "npx react-native run-android --variant=dev --appIdSuffix dev",
/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React from 'react';
import {AppRegistry, StatusBar} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';

import {name as appName} from './app.json';
import App from './src/App';
// import {API_URL} from './src/config/appConfig';
import Color from './src/constants/Colors';
import store from './src/store';
import Config from 'react-native-config';

// import AdmobBanner from './src/components/AdmobBanner';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: Color.tintColor,
    accent: Color.lightTintColor,
  },
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <Provider store={store}>
        <StatusBar
          backgroundColor={Color.darkTintColor}
          barStyle="light-content"
        />
        <App />
        {/* <AdmobBanner /> */}
      </Provider>
    </PaperProvider>
  );
}

axios.defaults.baseURL = Config.API_URL;

AppRegistry.registerComponent(appName, () => Main);

// import { AppRegistry } from 'react-native';
// import App from './App';

// AppRegistry.registerComponent(appName, () => App);

// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './src/App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
