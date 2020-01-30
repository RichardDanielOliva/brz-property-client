import PropertyActionTypes from "./property.types";

import {getPropertyList} from '../../business/services/PropertyServices';

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
  return dispatch => {
    dispatch(fetchPropertiesStart());

    const propertiesList = getPropertyList();

    propertiesList ? 
      fetchPropertiesSuccess(propertiesList) 
      :fetchPropertiesFailure(propertiesList.message)
  };
};



