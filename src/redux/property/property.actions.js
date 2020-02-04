import store from '../store';

import PropertyActionTypes from "./property.types";

import {mapJsonToPropertyList} from '../../utils/services/properties.converter';
import {getPropertyAPIUrl, getPropertyAPIOptions} from '../../utils/services/properties.services.api-url';

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

export const fetchPropertiesStartAsync = () => {
  let currentState = store.getState();

  const filterState = mapCurrentStateToFilterObject(currentState.filter);

  return dispatch => {
    dispatch(fetchPropertiesStart());

    fetch(getPropertyAPIUrl(filterState),
          getPropertyAPIOptions(filterState))
      .then(res => res.json())
      .then(res => {
          console.log(res)
          let propertyList = mapJsonToPropertyList(res, filterState)
          console.log(propertyList)
          dispatch(fetchPropertiesSuccess(propertyList));
          return propertyList;
      })
      .catch(error => {
        console.log(error)
          dispatch(fetchPropertiesSuccess(EXAMPLE_PROPERTY_DATA));
          //dispatch(fetchPropertiesFailure(error));
      })
  };
};

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
      y: filter.logitude,
      x: filter.latitude
    },
    maxDistance: filter.maxDistance,
    minDistance: filter.minDistance
  }
}
)