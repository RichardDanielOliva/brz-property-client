import MainSearchActionTypes from "./main-search.types";

export const handleOptionSelected = (inputValue) => ({
  type: MainSearchActionTypes.SET_OPTION,
  payload: inputValue
});

export const handlePropertySelected = (inputValue) => ({
  type: MainSearchActionTypes.SET_PROPERTY_NAME,
  payload: inputValue
});

export const displayPropertiesOptions = () => ({
  type: MainSearchActionTypes.SHOW_PROPERTIES_OPTIONS
});



