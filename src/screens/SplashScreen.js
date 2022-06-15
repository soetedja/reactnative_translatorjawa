import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';
import setAuthToken from '../utils/setAuthToken';

// const SCREEN_WIDTH = Dimensions.get('window').width;
// const SCREEN_HEIGHT = Dimensions.get('window').height;

// const BG_IMAGE = require('../assets/images/bg_screen2.jpg');
const LOGO = require('../assets/images/robot-dev.png');

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.authenticateSession();
  }

  authenticateSession() {
    const {navigation} = this.props;
    AsyncStorage.getItem('token')
      .then(token => {
        if (token) {
          setAuthToken(token);
          this.navigate(token);
        } else {
          navigation.navigate('LoginScreen');
        }
      })
      .catch(() => {
        navigation.navigate('Login');
      });
  }

  navigate(token) {
    const {navigation} = this.props;
    setTimeout(() => {
      if (token) {
        navigation.navigate('Map');
      } else {
        navigation.navigate('Events');
      }
    }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <ImageBackground source={LOGO} style={styles.bgImage}> */}
        <View style={styles.titleContainer}>
          <Image source={LOGO} style={{height: 75}} resizeMode="contain" />
          {/* <View style={{ flexDirection: 'row' }}>
              <Text style={styles.titleText}>KAJIAN</Text>
            </View>
            <View style={{ marginTop: -10, marginLeft: 10 }}>
              <Text style={styles.titleText}>MUSLIM</Text>
            </View> */}
        </View>
        {/* </ImageBackground> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'regular',
  },
});

SplashScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};
