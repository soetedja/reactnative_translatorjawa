import {DrawerScreen} from './Drawer';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {connect, useSelector} from 'react-redux';

import AuthStackScreen from '../screens/AuthScreen';
import SeplashScreen from '../screens/SeplashScreen';

const RootStack = createStackNavigator();
const RootStackScreen = () => {
  const {isLoading, user} = useSelector(state => state.auth);
  return (
    <RootStack.Navigator headerMode="none">
      {isLoading ? (
        <RootStack.Screen
          name="App"
          component={SeplashScreen}
          options={{
            animationEnabled: true,
          }}
        />
      ) : user && user.token ? (
        <RootStack.Screen
          name="App"
          component={DrawerScreen}
          options={{
            animationEnabled: true,
          }}
        />
      ) : (
        <RootStack.Screen
          name="Auth"
          component={AuthStackScreen}
          options={{
            animationEnabled: true,
          }}
        />
      )}
    </RootStack.Navigator>
  );
};
const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  null,
)(RootStackScreen);
