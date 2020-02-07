const HOME_BASE_URL = "http://localhost:8090/api/homes/homes";
//const HOME_BUY_URL = "http://localhost:8090/api/homes/homes";
//const HOME_RENT_URL = "http://localhost:8090/api/homes/homes";
//const HOME_SHARE_URL = "http://localhost:8090/api/homes/homes";
const HOME_FILTER_URL = "http://localhost:8090/api/homes/findByFilter";
const PREMISE_BASE_URL = "http://localhost:8090/api/premises/premises";
const PREMISE_FILTER_URL = "http://localhost:8090/api/premises/findByFilter";
const OFFICE_BASE_URL = "http://localhost:8090/api/offices/offices";
const OFFICE_FILTER_URL = "http://localhost:8090/api/offices/findByFilter";

export const getPropertyAPIUrl = (filter) => {
    console.log(filter)
    switch (filter.type) {
        case "HOME":
            return getHomeUrl(filter);
        case "PREMISE":
            return getPremiseUrl(filter);
        case "OFFICE":
            return getOfficeUrl(filter);
        default:
            break;
    }
}

const getHomeUrl = (filter) => {
    //if(isFilterResquest(filter))
    if(true)
        return HOME_FILTER_URL;

    return HOME_BASE_URL;
}

const getOfficeUrl = (filter) => {
    //if(isFilterResquest(filter))
    if(true)
        return OFFICE_FILTER_URL;

    return OFFICE_BASE_URL;
}

const getPremiseUrl = (filter) => {
    //if(isFilterResquest(filter))
    if(true)
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