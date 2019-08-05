import { FETCH_RECIPES, FETCH_RECIPE } from '../actions/types';

const initialState = {
  recipes: []
};

export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      if (action.newFetch)
        return { ...state, recipes: action.payload }
      else
        return { ...state, recipes: [...state.recipes, ...action.payload] }
    case FETCH_RECIPE:
      return { ...state, recipes: action.payload }
    default:
      return state
  }
}
