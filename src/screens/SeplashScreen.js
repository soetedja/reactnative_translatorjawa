import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {googleAuth} from '../actions/authActions';
const LOGO = require('../assets/images/mongosilakan.png');
import keys from '../config/keys';

GoogleSignin.configure({
  scopes: ['profile', 'email', 'openid'],
  webClientId: keys.google.client_id,
  offlineAccess: false,
  // hostedDomain: 'https://mongosilakan.net',
  loginHint: '',
  forceConsentPrompt: true,
  accountName: '',
  iosClientId: '',
});

class SeplashScreen extends React.Component {
  componentDidUpdate() {
    if (this.props.auth.isAuthenticated) {
      //   const {navigation} = this.props;
      //   //   navigation.navigate('Home');
    }
  }

  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
       console.log(userInfo);
      this.props.googleAuth(userInfo.idToken);
    } catch (error) {
      console.log(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  render() {
    if (!this.props.auth.isAuthenticated) {
      this._signIn();
    }
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

SeplashScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  language: state.language,
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  {googleAuth},
)(SeplashScreen);
