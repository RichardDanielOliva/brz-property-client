import PropertyFormTypes from "./property-form.types";
import { Property, HomeFeature, PremiseFeature, OfficeFeature, Location } from '../../utils/models/Property';
import { SAVE_PROPERTY_IMAGE_URL, getSavePropertyImageUrlOptions, getPropertyAPIUrlByType, getSavePropertyOptions, getUpdatePropertyOptions, getDeletePropertyOptions } from '../../utils/services/properties.services.api-url';
import { mapJsonProperty } from '../../utils/services/properties.converter';
import { fetchAllPropertiesByType } from '../property/property.actions';

import Geocode from "react-geocode";
import store from '../store';

Geocode.setApiKey("AIzaSyAPl_sJjmr80QS-JGtkcFFXNFLvkZiqpKY");
Geocode.setLanguage("en");

export const savePropertiesStart = (message) => ({
  type: PropertyFormTypes.SAVE_PROPERTY_START,
  payload: message
});

export const setEmptyForm = () => ({
  type: PropertyFormTypes.SET_EMPTY_FORM
});

export const saveImageSuccess = errorMessage => ({
  type: PropertyFormTypes.SAVE_IMAGE_SUCCESS,
  payload: errorMessage
});

export const savePropertiesSuccess = collectionsMap => ({
  type: PropertyFormTypes.SAVE_PROPERTY_SUCCESS,
  payload: collectionsMap
});

export const saveImageFailure = errorMessage => ({
  type: PropertyFormTypes.SAVE_IMAGE_FAILURE,
  payload: errorMessage
});

export const savePropertiesFailure = errorMessage => ({
  type: PropertyFormTypes.SAVE_PROPERTY_FAILURE,
  payload: errorMessage
});

export const setAdvertiserAttributte = (attributte, value) => ({
  type: PropertyFormTypes.SET_ADVERTISER_ATTRIBUTTE,
  attributte: attributte,
  payload: value
});

export const setFeatureAttributte = (attributte, value) => ({
  type: PropertyFormTypes.SET_FEATURE_ATTRIBUTTE,
  attributte: attributte,
  payload: value
});

export const setLocation = (location) => ({
  type: PropertyFormTypes.SET_LOCATION,
  payload: location
});

export const setImageUrl = (imageUrl) => ({
  type: PropertyFormTypes.SET_IMAGE_URL,
  payload: imageUrl
})

export const setLocationAttributte = (attributte, value) => ({
  type: PropertyFormTypes.SET_LOCATION_ATTRIBUTTE,
  attributte: attributte,
  payload: value
});

export const setFeatureType = (value, feature) => ({
  type: PropertyFormTypes.SELECT_FEATURE_TYPE,
  payload: value,
  feature: feature,
});

export const selectFeatureType = (value) => {
  let {type, status, area, extra, buildingArea, baths, rooms, buildingAge, energyCertificate} = store.getState().propertyForm.feature;
  if (!type)
    type = ''
  if (rooms)
    rooms = 1
  let feature;
  switch (value) {
    case "HOME":
      feature = new HomeFeature('', status, area, '', buildingArea, baths, rooms, buildingAge, energyCertificate)
      break;
    case "PREMISE":
      feature = new PremiseFeature(status, area, '', buildingArea, baths, buildingAge, energyCertificate, '')
      break;
    case "OFFICE":
      feature = new OfficeFeature(status, area, '', buildingArea, baths, buildingAge, energyCertificate)
      break;
    default:
      feature = new HomeFeature('', status, area, '', buildingArea, baths, rooms, buildingAge, energyCertificate)
      value = ''
      break;
  }
  console.log(value)

  return dispatch => {
    dispatch(setFeatureType(value, feature))
  }
}

export const setImages = (images, imagesPreview, auxImagesFilesPreview) => {
  return ({
    type: PropertyFormTypes.SET_IMAGES,
    payload: images,
    imagesPreview: imagesPreview,
    auxImagesFilesPreview: auxImagesFilesPreview,
  })
};

export const setFormStep = value => ({
  type: PropertyFormTypes.SET_FORM_STEP,
  payload: value
})

export const setAdvertiserUserContactAttributte = (attributte, idx, value) => {
  let currentState = store.getState();
  let userContact = currentState.propertyForm.advertiser.userContact
  userContact[attributte][idx] = value;
  return dispatch => {
    dispatch(setAdvertiserAttributte('userContact', userContact));
  }
};

export const addAdvertiserUserContactAttributte = (attributte) => {
  let currentState = store.getState();
  let userContact = currentState.propertyForm.advertiser.userContact
  userContact[attributte].push('');
  return dispatch => {
    dispatch(setAdvertiserAttributte('userContact', userContact));
  }
};

export const setLocationByCoordinatePicker = (event) => {
  return dispatch => {
    dispatch({
      type: PropertyFormTypes.SET_LOCATION_BY_COORDINATE_PICKER,
      payload: [event.latlng.lat, event.latlng.lng]
    })

    Geocode.fromLatLng(event.latlng.lat, event.latlng.lng).then(
      response => {
        let address_components = response.results[0].address_components;
        let location = new Location(
          `${address_components[1] ? address_components[1].long_name : ''}, ${address_components[0] ? address_components[0].long_name : ''}`,
          address_components[2] ? address_components[2].long_name : '', 
          address_components[4] ? address_components[4].long_name : '', 
          address_components[5] ? address_components[5].long_name : '', 
          address_components[6] ? address_components[6].long_name : '', 
          0)

        dispatch(setLocation(location))
      },
      error => {
        console.error(error);
      })
  }
}

export const setEditProperty = (propertyType, id) => {
  propertyType = propertyType.toUpperCase()
  console.log(`${getPropertyAPIUrlByType(propertyType)}/${id}`)
  return dispatch => {
    fetch(`${getPropertyAPIUrlByType(propertyType)}/${id}`)
    .then(res => {
      console.log(res)
      return res.json()
    })
      .then(res => {
        //let editProperty = {}
        console.log(res)
        let editProperty = mapJsonProperty(res, propertyType)
        let publishDate = new Date(editProperty.advertiser.publishDate)
        let auxDate = `${publishDate.getUTCFullYear()}-${publishDate.getUTCMonth() > 10 ? publishDate.getUTCMonth() +1 : `0${publishDate.getUTCMonth() +1}`}-${publishDate.getUTCDate()}`
        console.log(editProperty)
        console.log(auxDate)

        dispatch({
          type: PropertyFormTypes.SET_EDIT_PROPERTY,
          advertiser: {...editProperty.advertiser, "publishDate": auxDate},
          feature: editProperty.features,
          location: editProperty.location,
          coordinates: editProperty.geometry ? editProperty.geometry.coordinates : null,
          selectedFeature: propertyType,
          imagesSaved:  editProperty.images ? editProperty.images : null,
          isPropertieEdit: id
        })
      })
  }
}

const cleanProperty = (property) => {
  for (const key in property) {
    if (property[key] === "") {
      delete property[key]
    }
  }
  return property
}

export const saveProperty = () => { 
  let currentState = store.getState();
  let accessToken = currentState.auth.token
  let { isPropertieEdit, propertyID, imagesSaved } = currentState.propertyForm;
  imagesSaved = imagesSaved ? imagesSaved : [];
  let {
    imagesFiles, 
    advertiser,
    feature,
    location,
    coordinates,
    selectedFeature
  } = currentState.propertyForm;

  let propertyToSave = {
    "advertiser": advertiser,
    "location": location,
    ...feature
  }

  propertyToSave.geometry = {
    "type": "Point",
    "coordinates": [
      coordinates[0],
      coordinates[1]
    ]
  }

  return dispatch => {
    dispatch(savePropertiesStart(true))
    fetch(SAVE_PROPERTY_IMAGE_URL,
            getSavePropertyImageUrlOptions(imagesFiles, accessToken))
            .then(res => res.json())
            .then(res => {
              if(res.error)
                throw res.error
                //dispatch(saveImageFailure(res.error))

              dispatch(saveImageSuccess(true))
              propertyToSave.images = [...res, ...imagesSaved]
              propertyToSave = cleanProperty(propertyToSave)
              
              console.log(propertyToSave)

              let serverPropertyUrl = isPropertieEdit ? `${getPropertyAPIUrlByType(selectedFeature)}/${propertyID}`: getPropertyAPIUrlByType(selectedFeature);
              let fetchOptions = isPropertieEdit ? getUpdatePropertyOptions(propertyToSave, accessToken) : getSavePropertyOptions(propertyToSave, accessToken);
              
              fetch(serverPropertyUrl, fetchOptions)
                .then(res => { 
                  return res.json()
                })
                .then(res => {  
                  dispatch(savePropertiesSuccess(res))
              })
                
            }).catch(error => {
              dispatch(saveImageFailure(error))
                //dispatch(fetchPropertiesFailure(error));
            })
  }
}

export const deleteProperty = (propertyType, id) => {
  let currentState = store.getState();
  let accessToken = currentState.auth.token
  return dispatch => {
    fetch(
      `${getPropertyAPIUrlByType(propertyType)}/${id}`,
      getDeletePropertyOptions(accessToken))
      .then(res => { 
        dispatch(fetchAllPropertiesByType(propertyType))
      })
  }
}