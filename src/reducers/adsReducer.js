import {SET_ADS_BANNER} from '../actions/types';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ADS_BANNER:
      return {
        ...state,
        banner: action.payload,
      };
    default:
      return state;
  }
}
