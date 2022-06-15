import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Appbar, Avatar, useTheme} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {TransitionPresets} from '@react-navigation/stack';
import DictionaryScreen from '../screens/DictionaryScreen';
// import { BottomTabs } from './BottomTabs';
// import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import TranslateScreen from '../screens/TranslateScreen';

function SplashScreen() {
  return (
    <View>
      <Text>Loading... Splash</Text>
    </View>
  );
}

const Stack = createStackNavigator();

const StackNavigator = () => {
  const {isLoading, user, isSignout} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <Stack.Navigator
      //   initialRouteName="Splash"
      headerMode="screen"
      screenOptions={{
        header: ({scene, previous, navigation}) => {
          const {options} = scene.descriptor;
          const title =
            options.headerTitle !== undefined
              ? options.headerTitle
              : options.title !== undefined
              ? options.title
              : scene.route.name;

          return (
            <Appbar.Header theme={{colors: {primary: theme.colors.surface}}}>
              {previous ? (
                <Appbar.BackAction
                  onPress={navigation.goBack}
                  color={theme.colors.primary}
                />
              ) : (
                <TouchableOpacity
                  style={{marginLeft: 10}}
                  onPress={() => {
                    navigation.dispatch(DrawerActions.openDrawer());
                  }}>
                  <Avatar.Image
                    size={40}
                    source={{
                      uri:
                        'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
                    }}
                  />
                </TouchableOpacity>
              )}
              <Appbar.Content
                title={title}
                titleStyle={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: theme.colors.primary,
                }}
              />
            </Appbar.Header>
          );
        },
      }}>
      {isLoading ? (
        // We haven't finished checking for the token yet
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            headerShown: false,
            ...TransitionPresets.ModalSlideFromBottomIOS,
          }}
        />
      ) : user && user.token == null ? (
        // No token found, user isn't signed in
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Sign in Login2',
            ...TransitionPresets.ModalSlideFromBottomIOS,
            // When logging out, a pop animation feels intuitive
            // animationTypeForReplace: isSignout ? 'pop' : 'push',
          }}
        />
      ) : (
        <Stack.Screen
          name="Translate"
          component={TranslateScreen}
          options={{
            headerTitle: 'Translate',
            ...TransitionPresets.ModalSlideFromBottomIOS,
          }}
        />
      )}
      {/* <Stack.Screen
        name="Translate"
        component={TranslateScreen}
        options={{headerTitle: 'Translate'}}
      /> */}
    </Stack.Navigator>
  );
};

export default StackNavigator;
