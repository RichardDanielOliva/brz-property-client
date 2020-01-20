import MainSearchActionTypes from "./main-search.types";

const INITIAL_STATE = {
  optionSelected: "Buy",
  propertyTypeSelected: "Home",
  showPropertiesOptions: false,
};

const MainSearchReducer = (state = INITIAL_STATE, action) => {
  let actualState = state;
  switch (action.type) {
    case MainSearchActionTypes.SET_OPTION:
      return {
        ...state,
        optionSelected: action.payload
      };
    case MainSearchActionTypes.SET_PROPERTY_NAME:
        return {
          ...state,
          propertyTypeSelected: action.payload,
          showPropertiesOptions: !actualState.showPropertiesOptions
      };
    case MainSearchActionTypes.SHOW_PROPERTIES_OPTIONS:
        return {
          ...state,
          showPropertiesOptions: !actualState.showPropertiesOptions
      };
    default:
      return state;
  }
};

export default MainSearchReducer;
