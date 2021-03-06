import { SIGN_IN, SIGN_OUT, GET_ADMIN } from '../actions/types';

import { authReducer } from '../reducers/authReducer';

describe('Auth Reducer Tests', () => {

  it('should have a default state', () => {

    const defaultState = authReducer(undefined, { type: undefined });

    expect(defaultState).toEqual({
      isSignedIn: false,
      userId: null
    });

  });

  it('should set isSignedIn true and userId when a user logs in', () => {

    const userId = 1;

    const action = {
      type: SIGN_IN,
      payload: userId
    }

    const defaultState = authReducer(undefined, action);

    expect(defaultState).toEqual({
      isSignedIn: true,
      userId: userId
    });

  });

  it('should set isSignedIn false and userId null when a user logs out', () => {

    const userId = 1;

    const action = {
      type: SIGN_OUT,
      payload: userId
    }

    const defaultState = authReducer(undefined, action);

    expect(defaultState).toEqual({
      isSignedIn: false,
      userId: null
    });

  });

  it('should call GET_AUTH action and set isAuthed to true or false', () => {
    const userId = 1;

    const action = {
      type: GET_ADMIN,
      payload: userId
    }

    const authState = authReducer(undefined, action);

    expect(authState).toEqual({
      isSignedIn: false,
      userId: null,
      isAdmin: true
    })

  })

})