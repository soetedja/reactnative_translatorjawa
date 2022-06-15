import {TRANSLATE} from './types';
import axios from 'axios';
import qs from 'query-string';
import store from '../store';
import APIs from '../APIs';

const entity = 'translate';

export const translate = text => dispatch => {
  const state = store.getState();
  const {toLanguage, fromLanguage} = state.language;

  let params = {
    from: fromLanguage.id,
    to: toLanguage.id,
    source: text,
  };

  // const config = {
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  // };

  // updated to  '...' for loading
  dispatch({type: TRANSLATE, payload: '...'});

  // axios
  //   .post(`${APIs[entity].root}`, qs.stringify(params), config)
  //   .then(res => {
  //     // Save token to local storage
  //     let {model} = res.data.content;
  //     dispatch({type: TRANSLATE, payload: model.basic});
  //   })
  //   .catch(err => console.log(err));
  return axios
    .post(`${APIs[entity].root}`, params)
    .then(res => {
      dispatch({
        type: TRANSLATE,
        payload: res.data.data.basic,
      });
    })
    .catch(err => {
      console.log(err);
    });
};
