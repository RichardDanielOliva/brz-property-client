import FilterActionTypes from "./filter.types";

const INITIAL_STATE = {
  propertyType: "Home",
  propertyOperation: "Buy",
  showPropertiesOptions: false,
};

const FilterReducer = (state = INITIAL_STATE, action) => {
  let actualState = state;
  switch (action.type) {
    case FilterActionTypes.SET_SIMPLE_ATTRIBUTTE:
      return {
        ...state,
        [action.name]: action.payload
      };
    case FilterActionTypes.SET_COMPOUND_ATTRIBUTTE:
        return {
          ...state,
          [action.name]: action.payload
      };
    default:
      return state;
  }
};

export default FilterReducer;
