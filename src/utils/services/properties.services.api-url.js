const HOME_BASE_URL = "http://localhost:8090/api/homes/homes";
const PREMISE_BASE_URL = "http://localhost:8090/api/premises/premises";
const OFFICE_BASE_URL = "http://localhost:8090/api/offices/offices";

export const getPropertyAPIUrl = (filter) => {
    console.log(filter)
    switch (filter.type) {
        case "home":
            console.log(`API_URL : ${HOME_BASE_URL}`)
            return HOME_BASE_URL;
        case "premise":
            console.log(`API_URL : ${PREMISE_BASE_URL}`)
            return PREMISE_BASE_URL;
        case "office":
            console.log(`API_URL : ${OFFICE_BASE_URL}`)
            return OFFICE_BASE_URL;
        default:
            break;
    }
}