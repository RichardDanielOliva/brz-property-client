import PropertyActionTypes from "./property.types";

import {mapJsonToPropertyList} from '../../utils/services/properties.converter';
import {getPropertyAPIUrl} from '../../utils/services/properties.services.api-url';

import EXAMPLE_PROPERTY_DATA from '../../utils/default-data/property.data';

export const fetchPropertiesStart = () => ({
  type: PropertyActionTypes.FETCH_PROPERTIES_START
});

export const fetchPropertiesSuccess = collectionsMap => ({
  type: PropertyActionTypes.FETCH_PROPERTIES_SUCCESS,
  payload: collectionsMap
});

export const fetchPropertiesFailure = errorMessage => ({
  type: PropertyActionTypes.FETCH_PROPERTIES_FAILURE,
  payload: errorMessage
});

export const fetchPropertiesStartAsync = (filterState) => {
  return dispatch => {
    dispatch(fetchPropertiesStart());

    fetch(getPropertyAPIUrl(filterState))
      .then(res => res.json())
      .then(res => {
        console.log(res)
          let propertyList = mapJsonToPropertyList(res, filterState)
          console.log(propertyList)
          dispatch(fetchPropertiesSuccess(propertyList));
          return propertyList;
      })
      .catch(error => {
          dispatch(fetchPropertiesSuccess(EXAMPLE_PROPERTY_DATA));
          //dispatch(fetchPropertiesFailure(error));
      })
  };
};