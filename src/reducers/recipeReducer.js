import { FETCH_RECIPES, FETCH_RECIPE } from '../actions/types';

const initialState = {

};

export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      return { ...state, recipes: action.payload }
    case FETCH_RECIPE:
      return { ...state, recipes: action.payload }
    default:
      return state
  }
}
