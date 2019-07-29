import { FETCH_RECIPES, FETCH_RECIPE, FETCH_DICTIONARY, SIGN_IN, SIGN_OUT } from '../actions/types';
import { signIn, signOut, fetchRecipes, fetchDictionary, fetchRecipe } from '../actions'
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// TODO Import Actions

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Actions Test', () => {

  beforeEach(() => {
    moxios.install();
  })

  afterEach(() => {
    moxios.uninstall();
  })

  it('should return a SIGN_IN action with payload of userId', () => {
    const response = {
      type: SIGN_IN,
      payload: 1
    }
    const userId = response.payload;
    expect(signIn(userId)).toEqual(response);
  });

  it('should return a SIGN_OUT action with a payload of userId', () => {
    const response = {
      type: SIGN_OUT,
      payload: 1
    }
    const userId = response.payload;
    expect(signOut(userId)).toEqual(response);
  })

  it('should return a FETCH_RECIPES action with a payload of the API Recipe Data', () => {

    const mockRecipes = {
      1: {
        recipe: 'Chicken Parm'
      },
      2: {
        recipe: 'Lasagna'
      }
    }

    const expectedAction = [{
      type: FETCH_RECIPES,
      payload: mockRecipes
    }]

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: mockRecipes
      });
    });

    const store = mockStore({ recipes: {} });
    return store.dispatch(fetchRecipes()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    })
  })

  it('should return a FETCH_DICTIONARY action with a payload of the API Recipe Data', () => {

    const mockRecipes = {
      1: {
        recipe: 'Chicken Parm'
      },
      2: {
        recipe: 'Lasagna'
      }
    }

    const expectedAction = [{
      type: FETCH_DICTIONARY,
      payload: mockRecipes
    }]

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: mockRecipes
      });
    });

    const store = mockStore({ recipes: {} });
    return store.dispatch(fetchDictionary()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    })
  })

  it('should return a FETCH_RECIPE action with a payload of the API Recipe Data', () => {
    const mockRecipe = {
      title: 'title',
      description: 'description'
    }

    const expectedAction = [{
      type: FETCH_RECIPE,
      payload: mockRecipe
    }]

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: mockRecipe
      })

      const store = mockStore({ recipes: {} });
      return store.dispatch(fetchRecipe()).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      })
    })
  })


})