import DrawerContent from './navigation/DrawerContent';
import RootStackScreen from './navigation/RootStack';
import StackNavigator from './navigation/StackNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';

const navigationRef = React.createRef();

import 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

function navigate(name, params) {
  navigationRef.current && navigationRef.current.navigate(name, params);
}

class App extends Component {
  render() {
    return (
      <NavigationContainer ref={navigationRef}>
        <RootStackScreen />
        {/* <Drawer.Navigator drawerContent={() => <DrawerContent />}>
          <Drawer.Screen name="Home" component={StackNavigator} />
        </Drawer.Navigator> */}
      </NavigationContainer>
    );
  }
}

export default App;

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Platform,
//   StatusBar,
//   View,
//   Text
// } from 'react-native';
// import AppNavigator from './navigation/AppNavigator';

// export default class App extends Component {
//   state = {
//     isLoadingComplete: true
//   };

//   render() {
//     if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
//       return <Text>asdfadf</Text>;
//     } else {
//       return (
//         <View style={styles.container}>
//           {Platform.OS === 'ios' && <StatusBar barStyle='default' />}
//           <AppNavigator />
//         </View>
//       );
//     }
//   }

//   // _loadResourceAsync = async () => {
//   //   return Promise.all([
//   //     Asset.loadAsync([
//   //       require('./assets/images/robot-dev.png'),
//   //       require('./assets/images/robot-prod.png'),
//   //     ]),
//   //     Font.loadAsync({
//   //       ...Icon.Ionicons.font,
//   //       'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf')
//   //     })
//   //   ]);
//   // };

//   // _handleLoadingError = () => {
//   //   // console.warn(error);
//   // };

//   // _handleFinishLoading = () => {
//   //   this.setState({ isLoadingComplete: true });
//   // };
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff'
//   }
// });

// AppRegistry.registerComponent('App', () => App);
