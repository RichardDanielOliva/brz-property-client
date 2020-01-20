import UserActionTypes from "./user.types";

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

export const setCurrentLanguage = language => ({
  type: UserActionTypes.SET_CURRENT_LANGUAGE,
  payload: language
});

export const toggleLoginDropdownHidden = () => ({
  type: UserActionTypes.TOGGLE_LOGINDROPDOWN_HIDDEN
});

export const toggleShowPassword = () => ({
  type: UserActionTypes.TOGGLE_SHOW_PASSWORD
});
