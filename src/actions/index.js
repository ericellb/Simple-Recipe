import { FETCH_RECIPES, SIGN_IN, SIGN_OUT } from '../actions/types';
import axios from 'axios';

export const signIn = (userId) => ({
  type: SIGN_IN,
  payload: userId
});

export const signOut = (userId) => ({
  type: SIGN_OUT,
  payload: userId
});

export const fetchRecipes = (cuisineType, foodType) => async (dispatch) => {
  console.log(cuisineType);
  console.log(foodType);
  const url = (cuisineType === null ? `http://localhost:3001/recipes?foodType=${foodType}` : `http://localhost:3001/recipes?cuisineType=${cuisineType}`)
  // TEST WITH NO ARGS
  const res = await axios.get(url);
  console.log(res);
  dispatch({ type: FETCH_RECIPES, payload: res.data });
};
