import React from 'react';
import { View, AsyncStorage, Text } from 'react-native';
import Slides from '../components/Slides';
// import { AppLoading } from 'expo';
import _ from 'lodash';

const SLIDE_DATA = [
  { text: 'Selamat Datang', color: '#EE4B28' },
  { text: 'Translator Jawa', color: '#EE4B28' },
  { text: 'Maturnuwun', color: '#EE4B28' }
];

export default class WelcomeScreen extends React.Component {
  state = { firstRun: null };

  async UNSAFE_componentWillMount() {
    let firstRun = await AsyncStorage.getItem('first_run');
    // AsyncStorage.removeItem('fb_token');
    if (firstRun === null) {
      this.setState({ firstRun: true });
      AsyncStorage.setItem('first_run', 'false');
    } else {
      this.props.navigation.navigate('Translate');
    }
  }

  onSlideComplete = () => {
    this.props.navigation.navigate('Translate');
  };

  render() {
    if (_.isNull(this.state.firstRun)) {
      return <Text>Loading... Welcome</Text>;
    }
    return (
      <View style={styles.container}>
        <Slides data={SLIDE_DATA} onComplete={this.onSlideComplete} />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  }
};
