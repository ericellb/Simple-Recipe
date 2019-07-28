import { recipeReducer } from './recipeReducer';
import { dictionaryReducer } from './dictionaryReducer';
import { authReducer } from './authReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  recipes: recipeReducer,
  dictionary: dictionaryReducer,
  auth: authReducer
});