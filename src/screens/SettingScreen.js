import React from 'react';
import {View, Text} from 'react-native';
import {List} from 'react-native-paper';

class SettingScreen extends React.Component {
  render() {
    return (
      <View>
        <List.Item
          title="Tentang Aplikasi"
          // description="Item description"
          onPress={() => this.props.navigation.navigate('AboutApp')}
          // left={props => <List.Icon {...props} icon="folder" />}
        />
        {/* <List.Item
          title="Bantuan & Umpan balik"
          // description="Item description"
          onPress={() => this.props.navigation.navigate('HelpAndFeedback')}
          // left={props => <List.Icon {...props} icon="folder" />}
        /> */}
      </View>
    );
  }
}

export default SettingScreen;
