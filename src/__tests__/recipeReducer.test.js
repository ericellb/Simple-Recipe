import { FETCH_RECIPES, FETCH_RECIPE } from '../actions/types';

import { recipeReducer } from '../reducers/recipeReducer';

const mockRecipes = [
  {
    recipe: 'Chicken Parm'
  },
  {
    recipe: 'Lasagna'
  }
]

describe('Recipe Reducer Test', () => {

  it('should have an initial state of an empty object', () => {

    const defaultState = recipeReducer(undefined, { type: undefined });
    expect(defaultState).toEqual({});

  })

  it('should call FETCH_RECIPES action and return an object with array recipes given no initial state', () => {

    const action = {
      type: FETCH_RECIPES,
      payload: mockRecipes
    }

    const fetchRecipesState = recipeReducer(undefined, action);
    expect(fetchRecipesState).toEqual({ recipes: mockRecipes });
  })

  it('should call FETCH_RECIPE action and return an object with an array of 1 recipe given no initial state', () => {
    const mockRecipe = {
      title: 'title',
      description: 'description'
    }

    const action = {
      type: FETCH_RECIPE,
      payload: mockRecipe
    }

    const fetchRecipeState = recipeReducer(undefined, action);
    expect(fetchRecipeState).toEqual({ recipes: mockRecipe });
  })

})