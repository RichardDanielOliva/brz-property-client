import AuthActionTypes from "./auth.types";

export const setUser = user => ({
  type: AuthActionTypes.SET_USER,
  payload: user
});

export const setToken = token => ({
  type: AuthActionTypes.SET_TOKEN,
  payload: token
});


