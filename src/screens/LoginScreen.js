import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {googleAuth} from '../actions/authActions';
import keys from '../config/keys';
import Colors from '../constants/Colors';

const SCREEN_WIDTH = Dimensions.get('window').width;

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

class LoginScreen extends Component {
  state = {};

  componentDidUpdate() {
    if (this.props.auth.isAuthenticated) {
      const {navigation} = this.props;
      navigation.navigate('Home');
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
      <View />
      // <KeyboardAvoidingView style={styles.containerView} behavior='padding'>
      //   <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      //   </TouchableWithoutFeedback>
      // </KeyboardAvoidingView>
    );
  }

  componentDidMount() {}

  componentWillUnmount() {}

  onLoginPress() {}
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: '800',
    marginTop: 130,
    marginBottom: 10,
    textAlign: 'center',
    color: Colors.almostTintColor,
  },
  loginFormView: {
    flex: 1,
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  loginButton: {
    backgroundColor: Colors.tintColor,
    // borderRadius: 5,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  fbLoginButton: {
    // height: 45,
    marginTop: 10,
    backgroundColor: 'transparent',
  },
});

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  language: state.language,
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  {googleAuth},
)(LoginScreen);
