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

  address: null,
  latitude: 42.880619,
  logitude:-8.546610,
  zoom: 14,
  minDistance: 0,
  maxDistance: 500,
};

const FilterReducer = (state = INITIAL_STATE, action) => {
  let actualState = state;
  console.log(action)
  switch (action.type) {
    case FilterActionTypes.SET_ADDRESS_LOCATION:
      return {
        ...actualState,
        address: action.payload
      };
    case FilterActionTypes.SET_LOCATION_COORDINATES:
        return {
          ...actualState,
          latitude: action.payload.lat,
          logitude: action.payload.lng
        };
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
