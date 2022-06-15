import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common.Authorization = 'Bearer ' + token;
  } else {
    Reflect.deleteProperty(axios.defaults.headers.common, 'Authorization');
  }
};

export default setAuthToken;
