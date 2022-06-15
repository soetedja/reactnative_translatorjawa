import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import SettingStackScreen from './SettingStack';
import DictionaryStackScreen from './DictionaryStack';
import HomeStackScreen from './HomeStack';
import Colors from '../constants/Colors';

const Tab = createMaterialBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Terjemahan"
      activeColor={Colors.activeBottomTabColor}
      inactiveColor={Colors.secondaryTintColor}
      shifting={true}
      barStyle={{backgroundColor: Colors.tintColor}}
      sceneAnimationEnabled={false}>
      <Tab.Screen
        name="Terjemahan"
        component={HomeStackScreen}
        options={{
          tabBarIcon: 'square-edit-outline',
        }}
      />
      <Tab.Screen
        name="Kamus"
        component={DictionaryStackScreen}
        options={{
          tabBarIcon: 'book-open',
        }}
      />
      <Tab.Screen
        name="Pengaturan"
        component={SettingStackScreen}
        options={{
          tabBarIcon: 'cogs',
        }}
      />
    </Tab.Navigator>
  );
};
// const BottomTabNavigator = () => (
//   <Tabs.Navigator
//     screenOptions={({route}) => ({
//       tabBarIcon: ({focused, color, size}) => {
//         let iconName;
//         if (route.name === 'Terjemahan') {
//           iconName = focused ? 'ios-create' : 'ios-create';
//         } else if (route.name === 'Kamus') {
//           iconName = focused ? 'ios-list-box' : 'ios-list';
//         }

//         // You can return any component that you like here!
//         return <Ionicons name={iconName} size={size} color={color} />;
//       },
//     })}
//     tabBarOptions={{
//       activeTintColor: 'tomato',
//       inactiveTintColor: 'gray',
//     }}>
//     <Tabs.Screen name="Terjemahan" component={HomeStack} />
//     <Tabs.Screen name="Kamus" component={DictionaryStack} />
//   </Tabs.Navigator>
// );

export default BottomTabs;
