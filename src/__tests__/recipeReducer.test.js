import { FETCH_RECIPES } from '../actions/types';

import { recipeReducer } from '../reducers/recipeReducer';

describe('Recipe Reducer Test', () => {

  it('should have an initial state of an empty object', () => {

    const defaultState = recipeReducer(undefined, { type: undefined });
    expect(defaultState).toEqual({});

  })

  it('should call FETCH_RECIPES action and return an object with array recipes given no initial state', () => {

    const mockRecipes = [
      {
        recipe: 'Chicken Parm'
      },
      {
        recipe: 'Lasagna'
      }
    ]


    const action = {
      type: FETCH_RECIPES,
      payload: mockRecipes
    }

    const fetchRecipesState = recipeReducer(undefined, action);
    expect(fetchRecipesState).toEqual({ recipes: mockRecipes });

  })

})