import {combineReducers} from 'redux';
import languageReducer from './languageReducer';
import translateReducer from './translateReducer';
import dictionaryReducer from './dictionaryReducer';
import adsReducer from './adsReducer';
import authReducer from './authReducer';

export default combineReducers({
  ads: adsReducer,
  language: languageReducer,
  translate: translateReducer,
  dictionary: dictionaryReducer,
  auth: authReducer,
});
