import { FETCH_RECIPES, FETCH_RECIPE, FETCH_DICTIONARY, SIGN_IN, SIGN_OUT } from '../actions/types';
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
  // REMOVE WHEN DEPLOY (Shitty 'feature' with my router and NAT Loopback)
  const response = await getClientIP();
  let url = '';
  if (response.data.ip === "66.131.255.235")
    url = (cuisineType === null ? `http://localhost:3001/recipes?foodType=${foodType}` : `http://localhost:3001/recipes?cuisineType=${cuisineType}`);
  else
    url = (cuisineType === null ? `http://ericedg.duckdns.org:3001/recipes?foodType=${foodType}` : `http://ericedg.duckdns.org:3001/recipes?cuisineType=${cuisineType}`);
  const res = await axios.get(url);
  dispatch({ type: FETCH_RECIPES, payload: res.data });
};

export const fetchRecipe = (recipeId) => async (dispatch) => {
  console.log(recipeId);
  const response = await getClientIP();
  let url = '';
  if (response.data.ip === "66.131.255.235")
    url = `http://localhost:3001/recipes?id=${recipeId}`;
  else
    url = `http://ericedg.duckdns.org:3000/recipes?id=${recipeId}`
  const res = await axios.get(url);
  dispatch({ type: FETCH_RECIPE, payload: res.data });
}

export const fetchDictionary = () => async (dispatch) => {
  // REMOVE WHEN DEPLOY (Shitty 'feature' with my router and NAT Loopback)
  const response = await getClientIP();
  let url = '';
  if (response.data.ip === "66.131.255.235")
    url = (`http://localhost:3001/recipes?dictionary=1`);
  else
    url = (`http://ericedg.duckdns.org:3001/recipes?dictionary=1`);
  const res = await axios.get(url);
  dispatch({ type: FETCH_DICTIONARY, payload: res.data });
}

const getClientIP = async () => {
  return axios.get('https://api.ipify.org?format=json');
}