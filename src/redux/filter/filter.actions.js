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
        return getLatLng(results[0])})
      .then(latLng => {
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

export const handleInputAttributte = (value, name, fetchProperties = true) => {
  return dispatch => {
    dispatch(setSimpleAttributte(value, name));
    
    if(fetchProperties)
      dispatch(fetchPropertiesStartAsync());
  }
};

export const setSimpleAttributte = (value, name) => ({
  type: FilterActionTypes.SET_SIMPLE_ATTRIBUTTE,
  payload: value,
  name: name
});

export const handleCheckboxAttributte = (value, name, fetchProperties = true) => {
  console.log(value, name)
  return dispatch => {
    dispatch(setCompoundAttributte(value, name));
    
    if(fetchProperties)
      dispatch(fetchPropertiesStartAsync());
  }
};

export const setCompoundAttributte = (value, name) => ({
  type: FilterActionTypes.SET_COMPOUND_ATTRIBUTTE,
  payload: value,
  name: name
});
