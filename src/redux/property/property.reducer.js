import PropertyActionTypes from "./property.types";

const INITIAL_STATE = {
  data: null,
  isFetching: false,
  propertySection: "",
  errorMessage: undefined
};

const propertiesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PropertyActionTypes.FETCH_PROPERTIES_START:
      return {
        ...state,
        isFetching: true
      };
    case PropertyActionTypes.FETCH_PROPERTIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        errorMessage: false,
        data: action.payload
      };
    case PropertyActionTypes.FETCH_PROPERTIES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    case PropertyActionTypes.SET_PROPERTY_SECTION:
      return {
        ...state,
        propertySection: action.payload
      };
    default:
      return state;
  }
};

export default propertiesReducer;
