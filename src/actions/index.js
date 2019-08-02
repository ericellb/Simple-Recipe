import { FETCH_RECIPES, FETCH_RECIPE, FETCH_DICTIONARY, SIGN_IN, SIGN_OUT, GET_ADMIN } from '../actions/types';
import axios from 'axios';

const baseUrl = (process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'https://simple-recipe-api.herokuapp.com');

export const signIn = (userId, name, email) => async (dispatch) => {

  let url = `${baseUrl}/users?userId=${userId}&name=${name}&email=${email}`;
  await axios.post(url);
  dispatch({ type: SIGN_IN, payload: userId });
};

export const signOut = (userId) => ({
  type: SIGN_OUT,
  payload: userId
});

export const getAdmin = (userId) => async (dispatch) => {
  let url = `${baseUrl}/auth?userId=${userId}`
  const res = await axios.get(url);
  dispatch({ type: GET_ADMIN, payload: res.data });
}

export const fetchRecipes = (cuisineType, foodType) => async (dispatch) => {
  let url = (cuisineType === null ? `${baseUrl}/recipes?foodType=${foodType}` : `${baseUrl}/recipes?cuisineType=${cuisineType}`);
  const res = await axios.get(url);
  dispatch({ type: FETCH_RECIPES, payload: res.data });
};

export const fetchRecipe = (recipeId) => async (dispatch) => {
  let url = `${baseUrl}/recipes?id=${recipeId}`
  const res = await axios.get(url);
  dispatch({ type: FETCH_RECIPE, payload: res.data });
}

export const fetchDictionary = () => async (dispatch) => {
  let url = (`${baseUrl}/recipes?dictionary=1`);
  const res = await axios.get(url);
  dispatch({ type: FETCH_DICTIONARY, payload: res.data });
}