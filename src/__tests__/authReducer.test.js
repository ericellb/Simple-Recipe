import { SIGN_IN, SIGN_OUT } from '../actions/types';

// TODO Import Auth Reducer

describe('Auth Reducer Tests', () => {

  it('should have a default state', () => {

    const defaultState = authReducer(undefined, { type: undefined });

    expect(defaultState).toEqual({
      isSignedIn: false,
      userId: null
    });

  });

  it('should set state when a user logs in', () => {

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

  it('should set state when a user logs out', () => {

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

})