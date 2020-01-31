const HOME_BASE_URL = "http://localhost:8090/api/homes/homes";
const OFFICE_BASE_URL = "http://localhost:8090/api/offices/";

export const getPropertyAPIUrl = (filter) => {
    switch (filter.type) {
        case "home":
            console.log(`API_URL : ${HOME_BASE_URL}`)
            return HOME_BASE_URL;
        case "office":
            console.log(`API_URL : ${OFFICE_BASE_URL}`)
            return OFFICE_BASE_URL;
        default:
            break;
    }
}