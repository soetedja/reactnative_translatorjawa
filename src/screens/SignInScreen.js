import React from 'react';
import {View, Text} from 'react-native';

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'SignIn',
    headerMode: 'none',
    header: undefined,
  };

  render() {
    return (
      <View>
        <Text>SignInScreen</Text>
      </View>
    );
  }
}

export default SignInScreen;
