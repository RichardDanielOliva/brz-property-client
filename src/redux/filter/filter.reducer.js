import FilterActionTypes from "./filter.types";

const INITIAL_STATE = {
  propertyType: "HOME",
  propertyOperation: "BUY",
  propertyMinPrice: null,
  propertyMaxPrice: null,
  areaFrom: null,
  areaTo: null,

  homeRooms: null,
  homeBathRooms: null,

  homeExtras: null, 
  homeType: null,
  propertyStatus: null,

  officeExtras: null,

  premiseType: null,
  premiseExtras: null,

  sortBy: null,

  address: null,
  latitude: 42.880619,
  logitude:-8.546610,
  zoom: 14,
  minDistance: 0,
  maxDistance: 5000,

  number: 0,
  totalElements: null,
  totalPages: null,
  size: 20,

};

const FilterReducer = (state = INITIAL_STATE, action) => {
  let actualState = state;
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
        if(null === actualState[action.name])
          return {
            ...actualState,
            [action.name]: [action.payload]
          };
        
          if(actualState[action.name].includes(action.payload)){
            if(actualState[action.name].length > 1)
              return {
                ...actualState,
                [action.name]: actualState[action.name].filter(item => item!==action.payload)
              };
            else
            return {
              ...actualState,
              [action.name]: null
            };

          }

          actualState[action.name].push(action.payload)

          return {
            ...actualState
          };
        
        
    default:
      return actualState;
  }
};

export default FilterReducer;
