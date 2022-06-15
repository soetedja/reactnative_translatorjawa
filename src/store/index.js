import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducers from '../reducers';
import {
  Languages,
  DefaultFromLang,
  DefaultToLang,
} from '../constants/Languages';

const initialState = {
  language: {
    languages: Languages.filter((lang, idx) => idx > 0),
    fromLanguage: DefaultFromLang,
    toLanguage: DefaultToLang,
  },
  ads: {
    banner: false,
  },
};

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
