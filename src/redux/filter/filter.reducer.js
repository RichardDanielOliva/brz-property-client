import FilterActionTypes from "./filter.types";

const INITIAL_STATE = {
  propertyType: "HOME",
  propertyOperation: "BUY",
  propertyMinPrice: null,
  propertyMaxPrice: null,

  homeRooms: null,
  homeBathRooms: null,
  areaFrom: null,
  areaTo: null,
  homeExtras: null, 
  homeType: null,
  propertyStatus: null,

  latitude: 42.823610,
  logitude:-8.543413
};

const FilterReducer = (state = INITIAL_STATE, action) => {
  let actualState = state;
  switch (action.type) {
    case FilterActionTypes.SET_SIMPLE_ATTRIBUTTE:
      return {
        ...actualState,
        [action.name]: action.payload
      };
    case FilterActionTypes.SET_COMPOUND_ATTRIBUTTE:
        return {
          ...actualState,
          [action.name]: action.payload
      };
    default:
      return actualState;
  }
};

export default FilterReducer;
