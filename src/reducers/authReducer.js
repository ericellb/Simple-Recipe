import { SIGN_IN, SIGN_OUT, GET_ADMIN } from '../actions/types';

const initialState = {
  isSignedIn: false,
  userId: null,
  isAdmin: false
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload }
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null }
    case GET_ADMIN:
      return { ...state, isAdmin: action.payload }
    default:
      return state
  }
}
