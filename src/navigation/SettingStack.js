import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {connect} from 'react-redux';
import Colors from '../constants/Colors';
import SettingScreen from '../screens/SettingScreen';
import AboutAppScreen from '../screens/AboutAppScreen';
import HelpAndFeedbackScreen from '../screens/HelpAndFeedbackScreen';

const SettingStack = createStackNavigator();

const SettingStackScreen = () => {
  return (
    <SettingStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.tintColor,
        },
        headerTintColor: Colors.headerColor,
      }}>
      <SettingStack.Screen
        name="Pengaturan"
        component={SettingScreen}
        options={{
          animationEnabled: true,
        }}
      />
      <SettingStack.Screen
        name="AboutApp"
        component={AboutAppScreen}
        options={{
          animationEnabled: true,
        }}
      />
      <SettingStack.Screen
        name="HelpAndFeedback"
        component={HelpAndFeedbackScreen}
        options={{
          animationEnabled: true,
        }}
      />
    </SettingStack.Navigator>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  null,
)(SettingStackScreen);
