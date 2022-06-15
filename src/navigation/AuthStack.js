import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens/LoginScreen';

const AuthStack = createStackNavigator();

export const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignIn"
      component={LoginScreen}
      options={{title: 'Sign In'}}
    />
    {/* <AuthStack.Screen
      name="CreateAccount"
      component={CreateAccount}
      options={{title: 'Create Account'}}
    /> */}
  </AuthStack.Navigator>
);
