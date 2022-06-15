import React from 'react';
import {View, Text} from 'react-native';

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
    headerMode: 'none',
    header: undefined,
  };

  render() {
    return (
      <View>
        <Text>Profile Screen</Text>
      </View>
    );
  }
}

export default ProfileScreen;
