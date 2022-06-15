import {
  GET_SUGGESTION_WORDS_DICTIONARY,
  GET_DICTIONARY_RESULT,
} from '../actions/types';
import {Languages} from '../constants/Languages';

const initialState = {
  result: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SUGGESTION_WORDS_DICTIONARY:
      return {
        ...state,
        wordSuggestions: action.payload,
      };
    case GET_DICTIONARY_RESULT:
      var result = {};
      Languages.map((lang, id) => {
        if (result[lang.id] === undefined) {
          result[id] = [];
        }
        action.payload.member
          .filter(item => item.result_language_id == id)
          .map(res => result[id].push(res.result));
      });
      return {
        ...state,
        result,
      };
    default:
      return state;
  }
}
