import {GET_SUGGESTION_WORDS_DICTIONARY, GET_DICTIONARY_RESULT} from './types';
import axios from 'axios';
import qs from 'query-string';

export const getSuggestionWordDictionary = (value, lang) => dispatch => {
  let params = {
    value,
    lang,
  };

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  axios
    .post(
      'http://mongosilakan.net/api/v1/word/getSuggestionWordDictionary',
      qs.stringify(params),
      config,
    )
    .then(res => {
      let {model} = res.data.content;
      dispatch({type: GET_SUGGESTION_WORDS_DICTIONARY, payload: model});
    })
    .catch(err => console.log(err));
};

export const getDictionaryResult = id => dispatch => {
  let params = {
    id,
  };

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  axios
    .post(
      'http://mongosilakan.net/api/v1/translate/getWordDictionaryDetails',
      qs.stringify(params),
      config,
    )
    .then(res => {
      let {model} = res.data.content;
      dispatch({type: GET_DICTIONARY_RESULT, payload: model});
    })
    .catch(err => console.log(err));
};
