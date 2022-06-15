import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';
import BottomTabNavigator from './BottomTabNavigator';
import ProfileStack from './ProfileStack';

const Drawer = createDrawerNavigator();

export const DrawerScreen = () => (
  <Drawer.Navigator drawerContent={({navigation}) => <DrawerContent navigation={navigation} />}>
    <Drawer.Screen name="Home" component={BottomTabNavigator} />
    {/* <Drawer.Screen name="Profile" component={ProfileStack} /> */}
  </Drawer.Navigator>
);
