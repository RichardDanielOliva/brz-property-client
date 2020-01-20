import NavActionTypes from "./nav.types";

export const handleSearchInput = (inputValue) => ({
  type: NavActionTypes.SET_SEARCH_INPUT_VALUE,
  payload: inputValue
});

export const handleDropDownProfile = () => ({
  type: NavActionTypes.DISPLAY_PROFILE_DROWN_DOWN
});


