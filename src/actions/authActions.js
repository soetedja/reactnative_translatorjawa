import APIs from '../APIs';
import {GUEST_USER_ID, REFRESH_TOKEN_BEFORE} from '../Constants';
import setAuthToken from '../utils/setAuthToken';
import {SET_CURRENT_USER} from './types';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

// Login - Get User Token
export const googleAuth = tokenId => dispatch => {
  axios
    .post(`${APIs.index.googleAuth}`, {
      tokenId,
    })
    .then(res => {
      dispatch(handleLoginSuccess(res.data.data));
    })
    .catch(err => console.log(err));
};

const handleLoginSuccess = data => dispatch => {
  console.log('data', data);
  const {expiry_time, refresh_token, token, user} = data;
  // Set token to ls
  AsyncStorage.setItem('jwtToken', token);
  AsyncStorage.setItem('user', JSON.stringify(user));
  AsyncStorage.setItem('expiry_time', expiry_time.toString());
  AsyncStorage.setItem('refresh_token', refresh_token);

  // let expire_in = expiry_time - 1 * 3600; // you can configure as you want but here it is 1 hour before token will get expired
  let expire_in = expiry_time - 1 * 30; // you can configure as you want but here it is 1 min before token will get expired
  var utcSeconds = expire_in;
  var d = new Date(0);
  d.setUTCSeconds(utcSeconds);

  // const timeout = d - new Date();
  // setTimeout(() => {
  //   dispatch(refreshToken(refresh_token));
  // }, timeout);

  // Set token to Auth header
  setAuthToken(token);

  if (GUEST_USER_ID !== user.id) {
    // dispatch(getSavedTranslation());
  }
  // Set current user
  user.token = token;
  dispatch(setCurrentUser(user));
};

// Login - Get User Token
export const refreshToken = refresh_token => dispatch => {
  axios
    .post(`${APIs.user.refreshToken}`, {
      refresh_token,
    })
    .then(res => {
      dispatch(handleRefreshTokenSuccess(res.data.data));
    })
    .catch(err => console.log(err));
};

const handleRefreshTokenSuccess = data => dispatch => {
  const {expiry_time, refresh_token, token} = data;
  // Set token to ls
  AsyncStorage.setItem('jwtToken', token);
  AsyncStorage.setItem('expiry_time', expiry_time.toString());
  AsyncStorage.setItem('refresh_token', refresh_token);

  let expire_in = expiry_time - REFRESH_TOKEN_BEFORE * 60;
  var utcSeconds = expire_in;
  var d = new Date(0);
  d.setUTCSeconds(utcSeconds);

  const interval = d - new Date();

  if (interval < 0) {
    dispatch(refreshToken(AsyncStorage.getItem(refresh_token)));
  } else {
    setInterval(() => {
      dispatch(refreshToken(AsyncStorage.getItem(refresh_token)));
    }, interval);
  }
  // setTimeout(() => {
  //   dispatch(refreshToken(refresh_token));
  // }, timeout);

  // Set token to Auth header
  setAuthToken(token);
};

// Set logged in user
export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
};
