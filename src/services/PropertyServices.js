import {Property, Location, HomeFeature} from '../entities/Property';
import { connect } from 'react-redux';

const HOME_BASE_URL = "http://localhost:8090/api/homes/homes";

export const getPropertyList = ({...property}) => {
    console.log(property);
    const newLocation = new Location("Hola", "Cestato")
    const newHomeFeature = new HomeFeature("Hola", "Cestato")
    const newHome = new Property("Hola", "Cestato", newLocation)
    console.log(newHome);

    fetch(HOME_BASE_URL)
        .then((response) => response.json())
        .then(function(myJson) {
            console.log(myJson);
          });
}

const mapToProperty = (json) => {

}
  

