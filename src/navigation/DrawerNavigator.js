import React from 'react';
import {
  createSwitchNavigator,
  createAppContainer,
} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {DrawerActions} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native';
import {IconButton} from 'react-native-paper';

import LogoTitle from '../components/LogoTitle';
// import HomeScreen from '../screens/HomeScreen';
import DrawerScreen from './DrawerScreen';
import TranslateScreen from '../screens/TranslateScreen';
import DictionaryScreen from '../screens/DictionaryScreen';
import DictionaryResultScreen from '../screens/DictionaryResultScreen';
import SettingScreen from '../screens/SettingScreen';
import HelpAndFeedbackScreen from '../screens/HelpAndFeedbackScreen';
import ChooseLanguageScreen from '../screens/ChooseLanguageScreen';
import LoginScreen from '../screens/LoginScreen';
import SplashScreen from '../screens/SplashScreen';
import Color from '../constants/Colors';

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: TranslateScreen,
    },
    Dictionary: {
      screen: DictionaryScreen,
    },
  },
  {
    initialRouteName: 'Home',
    contentComponent: DrawerScreen,
    drawerWidth: 300,
  },
);

const WelcomeNavigator = createSwitchNavigator(
  {
    //important: key and screen name (i.e. DrawerNavigator) should be same while using the drawer navigator inside stack navigator.
    Splash: {
      screen: SplashScreen,
    },
    Login: {
      screen: LoginScreen,
    },
  },
  {
    navigationOptions: {
      headerShown: false,
    },
  },
);

const SwitchNavigator = createSwitchNavigator(
  {
    //important: key and screen name (i.e. DrawerNavigator) should be same while using the drawer navigator inside stack navigator.
    DrawerNavigator: {
      screen: DrawerNavigator,
    },
  },
  {
    navigationOptions: ({navigation}) => ({
      // title: 'Mongosilakan',
      headerTitle: () => <LogoTitle />, // Title to appear in status bar
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.dispatch(DrawerActions.toggleDrawer());
          }}>
          <IconButton
            size={25}
            color={Color.headerColor}
            icon="menu"
            mode="outlined"
          />
        </TouchableOpacity>
      ),
      headerStyle: {
        height: 45,
        backgroundColor: Color.tintColor,
      },
      headerTintColor: Color.lightTintColor,
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  },
);

export default createAppContainer(
  createStackNavigator(
    {
      Welcome: WelcomeNavigator,
      Main: SwitchNavigator,
      Dictionary: {
        screen: DictionaryScreen,
      },
      DictionaryResult: {
        screen: DictionaryResultScreen,
      },
      Setting: {
        screen: SettingScreen,
        headerMode: 'none',
      },
      HelpAndFeedback: {
        screen: HelpAndFeedbackScreen,
        headerMode: 'none',
      },
      ChooseLanguage: {
        screen: ChooseLanguageScreen,
        headerMode: 'none',
      },
    },
    {
      // headerMode: 'none'
    },
  ),
);
