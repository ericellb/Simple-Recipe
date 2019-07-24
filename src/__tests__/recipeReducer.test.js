import { FETCH_RECIPES } from '../actions/types';

// TODO Import Recipe Reducer

describe('Recipe Reducer Test', () => {

  it('should have an initial state of an empty object', () => {

    const defaultState = recipeReducer(undefined, { type: undefined });
    expect(defaultState).toEqual({});

  })

  it('should return array streams given no initial state', () => {

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
    expect(fetchRecipesState).toEqual(mockRecipes);

  })

})