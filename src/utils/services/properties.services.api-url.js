const HOME_BASE_URL = "http://localhost:8090/api/homes/homes";
const HOME_FILTER_URL = "http://localhost:8090/api/homes/findByFilter";
const PREMISE_BASE_URL = "http://localhost:8090/api/premises/premises";
const OFFICE_BASE_URL = "http://localhost:8090/api/offices/offices";

export const getPropertyAPIUrl = (filter) => {
    console.log(filter)
    switch (filter.type) {
        case "HOME":
            return getHomeUrl(filter);
        case "PREMISE":
            console.log(`API_URL : ${PREMISE_BASE_URL}`)
            return PREMISE_BASE_URL;
        case "OFFICE":
            console.log(`API_URL : ${OFFICE_BASE_URL}`)
            return OFFICE_BASE_URL;
        default:
            break;
    }
}

export const getPropertyAPIOptions = (filter) => {
    if(isFilterResquest(filter))
        return {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(filter), // data can be `string` or {object}!
            headers: {
            'Content-Type': 'application/json'
            }
        }
}

const getHomeUrl = (filter) => {
    if(isFilterResquest(filter))
        return HOME_FILTER_URL;

    return HOME_BASE_URL;
}

const isFilterResquest = (filter) => {
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
}