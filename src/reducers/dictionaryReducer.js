import { FETCH_DICTIONARY } from '../actions/types';

const initialState = {

};

export const dictionaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DICTIONARY:
      return { ...state, dictionary: action.payload }
    default:
      return state
  }
}
