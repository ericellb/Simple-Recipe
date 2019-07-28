
import { FETCH_DICTIONARY } from '../actions/types';

import { dictionaryReducer } from '../reducers/dictionaryReducer';

const mockDictionary = [
  {
    recipe: 'Chicken Parm'
  },
  {
    recipe: 'Lasagna'
  }
]

describe('Dictionary Reducer Test', () => {

  it('should call FETCH_DICTIONARY action and return an object with array of all recipes in DB', () => {

    const action = {
      type: FETCH_DICTIONARY,
      payload: mockDictionary
    }

    const fetchDictionaryState = dictionaryReducer(undefined, action);
    expect(fetchDictionaryState).toEqual({ dictionary: mockDictionary });

  })

})