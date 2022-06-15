import {
  DefaultFromLang,
  DefaultToLang,
  Languages,
} from '../constants/Languages';
import store from '../store';
import {GET_LANGUAGES, SET_FROM_LANGUAGE, SET_TO_LANGUAGE} from './types';

export const getLanguages = () => dispatch => {
  dispatch({
    type: GET_LANGUAGES,
    payload: Languages,
  });
};

export const setFromLanguage = lang => dispatch => {
  const state = store.getState();
  const {toLanguage, fromLanguage} = state.language;
  if (lang === toLanguage) {
    dispatch({
      type: SET_TO_LANGUAGE,
      payload: fromLanguage,
    });
  }
  dispatch({
    type: SET_FROM_LANGUAGE,
    payload: lang || DefaultFromLang,
  });
};

export const setToLanguage = lang => dispatch => {
  const state = store.getState();
  const {toLanguage, fromLanguage} = state.language;
  if (lang === fromLanguage) {
    dispatch({
      type: SET_FROM_LANGUAGE,
      payload: toLanguage,
    });
  }
  dispatch({
    type: SET_TO_LANGUAGE,
    payload: lang || DefaultToLang,
  });
};

export const swapLanguages = () => dispatch => {
  const state = store.getState();
  const {fromLanguage} = state.language;
  dispatch(setToLanguage(fromLanguage));
};
