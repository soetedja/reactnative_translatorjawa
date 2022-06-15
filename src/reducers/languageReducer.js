import {
  SET_FROM_LANGUAGE,
  SET_TO_LANGUAGE,
  GET_LANGUAGES
} from '../actions/types';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
  case SET_FROM_LANGUAGE:
    return {
      ...state,
      fromLanguage: action.payload
    };
  case SET_TO_LANGUAGE:
    return {
      ...state,
      toLanguage: action.payload
    };
  case GET_LANGUAGES:
    return action.payload;
  default:
    return state;
  }
}
