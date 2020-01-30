import {Property,PropertyList,UserContact, Advertiser, Location, HomeFeature} from '../entities/Property';

import EXAMPLE_PROPERTY_DATA from './property.data';

const HOME_BASE_URL = "http://localhost:8090/api/homes/homes";

export const getPropertyList = ({...property}) => {
    let propertiesList;  

    return  fetch(HOME_BASE_URL)
                .then((response) => response.json())
                .then((myJson) => {
                    return mapToPropertyList(myJson)
                })
                .catch(function(error) {
                    console.log('Hubo un problema con la petición Fetch:' + error.message);
                    return EXAMPLE_PROPERTY_DATA;
                });
}

const mapToPropertyList = (json) => {
    let homes = json._embedded.homes;
    let properties = homes.map((home)=>
                            mapJsonHomeToProperty(home))
    let page = json.page;
    return new PropertyList(properties, page)
}

const mapJsonHomeToProperty = (home) => {
    return new Property(
        new HomeFeature(
            home.type ? home.type : null,
            home.status ? home.status : null,
            home.area ? home.area : null, 
            home.extras ? home.extras : null, 
            home.buildingArea ? home.buildingArea:null, 
            home.baths ? home.baths : null, 
            home.rooms ? home.rooms : null, 
            home.buildingAge ? home.buildingAge : null, 
            home.energyCertificate ? home.energyCertificate : null
        ),
        new Advertiser(
            home.advertiser.operation ? home.advertiser.operation : null, 
            home.advertiser.propertyMessage ? home.advertiser.propertyMessage : null, 
            new UserContact(
                home.advertiser.userContact.phones ? home.type:null,
                home.advertiser.userContact.emails ? home.type:null
            ), 
            home.advertiser.publishDate ? home.advertiser.publishDate : null, 
            home.advertiser.price ? home.advertiser.price : null, 
            home.advertiser.userid ? home.advertiser.userid : null
            ),
        new Location(
            home.location.addressed ? home.location.addressed : null, 
            home.location.city ? home.location.city:null, 
            home.location.state ? home.location.state:null, 
            home.location.country ? home.location.country:null, 
            home.location.postalCode ? home.location.postalCode:null, 
            home.location.streetId ? home.location.streetId:null
        ),
        home.images ? home.images : null,
        home.id ? home.id : null
    )
}