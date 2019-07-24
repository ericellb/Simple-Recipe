import { recipeReducer } from './recipeReducer';
import { authReducer } from './authReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  recipes: recipeReducer,
  auth: authReducer
});