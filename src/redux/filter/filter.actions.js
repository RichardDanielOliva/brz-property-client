import store from '../store';
import FilterActionTypes from "./filter.types";
import {fetchPropertiesStartAsync} from '../property/property.actions';

import {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

export const handleInputAutocompleteSelect = (address) =>{
  return dispatch => {
    geocodeByAddress(address)
      .then(results => {
        console.log('Result ', results)
        return getLatLng(results[0])})
      .then(latLng => {
          console.log('Success', latLng)
          dispatch(setLocationCoordinates(latLng));  
          dispatch(handleInputAutocompleteChange(address))   
        })
      .catch(error => console.error('Error', error));
    }
}

export const handleInputAutocompleteChange = (address) => ({
  type: FilterActionTypes.SET_ADDRESS_LOCATION,
  payload: address
});

export const setLocationCoordinates = (latLng) => ({
  type: FilterActionTypes.SET_LOCATION_COORDINATES,
  payload: latLng
});

export const setSimpleAttributte = (value, name) => ({
  type: FilterActionTypes.SET_SIMPLE_ATTRIBUTTE,
  payload: value,
  name: name
});

export const handleInputAttributte = (value, name) => {
  let currentState = store.getState();
  currentState.filter[name] = value;
  
  const filterState = mapCurrentStateToFilterObject(currentState.filter);

  return dispatch => {
    dispatch(setSimpleAttributte(value, name));
    dispatch(fetchPropertiesStartAsync(filterState));
  }
};

export const handleCheckboxAttributte = (value, name) => ({
  type: FilterActionTypes.SET_COMPOUND_ATTRIBUTTE,
  payload: value,
  name: name
});

const mapCurrentStateToFilterObject= filter => ({
  type: filter.propertyType,
  operation: filter.propertyOperation,
  price: {
      min: filter.propertyMinPrice,
      max: filter.propertyMaxPrice,
  },
  area:{
      from: filter.areaFrom,
      to: filter.areaTo
  },
  features: {
      rooms: filter.homeRooms,
      baths: filter.homeBathRooms,
      extras: filter.homeExtras,
      types: filter.homeType
  },
  status: filter.propertyStatus,
  location: {
    type: "Point",
    coordinates: {
      x: filter.logitude,
      y: filter.latitude
    },
    maxDistance: filter.maxDistance,
    minDistance: filter.minDistance
  }
}
)



