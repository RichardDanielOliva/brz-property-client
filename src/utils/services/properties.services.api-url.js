export const API_HOST = "http://52.147.206.65:8090";

const HOME_BASE_URL = `${API_HOST}/api/homes/homes`;
const HOME_FILTER_URL = `${API_HOST}/api/homes/findByFilter`;
const PREMISE_BASE_URL = `${API_HOST}/api/premises/premises`;
const PREMISE_FILTER_URL = `${API_HOST}/api/premises/findByFilter`;
const OFFICE_BASE_URL = `${API_HOST}/api/offices/offices`;
const OFFICE_FILTER_URL = `${API_HOST}/api/offices/findByFilter`;

export const SAVE_PROPERTY_IMAGE_URL = `${API_HOST}/api/resources/images/upload`;

export const getPropertyAPIUrl = (filter) => {
    console.log(filter)
    switch (filter.type) {
        case "HOME":
            return getHomeUrl(true);
        case "PREMISE":
            return getPremiseUrl(true);
        case "OFFICE":
            return getOfficeUrl(true);
        default:
            break;
    }
}

export const getPropertyAPIUrlByType = (type) => {
    switch ( type ) {
        case "HOME":
            return getHomeUrl(false);
        case "PREMISE":
            return getPremiseUrl(false);
        case "OFFICE":
            return getOfficeUrl(false);
        default:
            break;
    }
}

const getHomeUrl = (isFilter) => {
    //if(isFilterResquest(filter))
    if(isFilter)
        return HOME_FILTER_URL;

    return HOME_BASE_URL;
}

const getOfficeUrl = (isFilter) => {
    //if(isFilterResquest(filter))
    if(isFilter)
        return OFFICE_FILTER_URL;

    return OFFICE_BASE_URL;
}

const getPremiseUrl = (isFilter) => {
    //if(isFilterResquest(filter))
    if(isFilter)
        return PREMISE_FILTER_URL;

    return PREMISE_BASE_URL;
}

/**const isFilterResquest = (filter) => {
    return (filter.price.min || 
        filter.price.max ||
        filter.area.from ||
        filter.area.to ||
        filter.features.rooms ||
        filter.features.baths ||
        filter.features.extras ||
        filter.features.types ||
        filter.status
        )
}*/

export const getPropertyAPIOptions = (filter) => {
    //if(isFilterResquest(filter))
    if(true)
        return {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(filter), // data can be `string` or {object}!
            headers: {
            'Content-Type': 'application/json'
            }
        }
}

export const getSavePropertyImageUrlOptions = (images, accessToken) => {
    //if(isFilterResquest(filter))
    const httpHeaders = new Headers({
        'Authorization': `Bearer ${accessToken}`,
      });

    let formData = new FormData();
    //formData.append('files', images, "files")
    images.forEach(image => formData.append('files', image)) //multipartFiles

    if(true)
        return {
            method: 'POST', // or 'PUT'
            headers: httpHeaders,
            body: formData,
        }
}

export const getSavePropertyOptions = (property, accessToken) => {
    //if(isFilterResquest(filter))
    const httpHeaders = new Headers({
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      });

    return {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(property), // data can be `string` or {object}!
            headers: httpHeaders
    }
}

export const getUpdatePropertyOptions = (property, accessToken) => {
    //if(isFilterResquest(filter))
    const httpHeaders = new Headers({
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      });

    return {
            method: 'PUT', // or 'PUT'
            body: JSON.stringify(property), // data can be `string` or {object}!
            headers: httpHeaders
    }
}

export const getDeletePropertyOptions = (accessToken) => {
    //if(isFilterResquest(filter))
    const httpHeaders = new Headers({
        'Authorization': `Bearer ${accessToken}`,
      });

    return {
            method: 'DELETE', // or 'PUT',
            headers: httpHeaders
    }
}