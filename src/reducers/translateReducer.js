import { TRANSLATE } from '../actions/types';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
  case TRANSLATE:
    return {
      ...state,
      result: action.payload
    };

  default:
    return state;
  }
}
