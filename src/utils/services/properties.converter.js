import {Property,PropertyList,UserContact, Advertiser, Location, HomeFeature, OfficeFeature} from '../models/Property';

export const mapJsonToPropertyList = (json, filter) => {
    switch (filter.type) {
        case "HOME":
            return mapJsonToHomesList(json);
        case "PREMISE":
            return mapJsonToPremisesList(json);
        case "OFFICE":
            return mapJsonToOfficesList(json);
        default:
            break;
    }
}

const mapJsonToHomesList = (json) => {
    let homes = json._embedded.properties;
    let properties = homes.map((home)=>
                            mapJsonHomeToProperty(home))
    let page = json.page ? json.page : null;
    return new PropertyList(properties, page)
}

const mapJsonToOfficesList = (json) => {
    let offices = json._embedded.properties;
    let properties = offices.map((office)=>
                                mapJsonOfficeToProperty(office))
    let page = json.page;
    return new PropertyList(properties, page)
}

const mapJsonToPremisesList = (json) => {
    let premises = json._embedded.properties;
    let properties = premises.map((premise)=>
                                mapJsonOfficeToProperty(premise))
    let page = json.page;
    return new PropertyList(properties, page)
}

const mapJsonOfficeToProperty = (offices) => {
    return new Property(
        new OfficeFeature(
            offices.status ? offices.status : null,
            offices.area ? offices.area : null, 
            offices.extras ? offices.extras : null, 
            offices.buildingArea ? offices.buildingArea:null, 
            offices.baths ? offices.baths : null, 
            offices.buildingAge ? offices.buildingAge : null, 
            offices.energyCertificate ? offices.energyCertificate : null
        ),
        new Advertiser(
            offices.advertiser.operation ? offices.advertiser.operation : null, 
            offices.advertiser.propertyMessage ? offices.advertiser.propertyMessage : null, 
            new UserContact(
                offices.advertiser.userContact.phones ? offices.advertiser.userContact.phones:null,
                offices.advertiser.userContact.emails ? offices.advertiser.userContact.emails :null
            ), 
            offices.advertiser.publishDate ? offices.advertiser.publishDate : null, 
            offices.advertiser.price ? offices.advertiser.price : null, 
            offices.advertiser.userid ? offices.advertiser.userid : null
            ),
        new Location(
            offices.location.addressed ? offices.location.addressed : null, 
            offices.location.city ? offices.location.city:null, 
            offices.location.state ? offices.location.state:null, 
            offices.location.country ? offices.location.country:null, 
            offices.location.postalCode ? offices.location.postalCode:null, 
            offices.location.streetId ? offices.location.streetId:null
        ),
        offices.images ? offices.images : null,
        offices.geometry ? offices.geometry : null,
        offices.id ? offices.id : null
    )
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
                home.advertiser.userContact.phones ? home.advertiser.userContact.phones:null,
                home.advertiser.userContact.emails ? home.advertiser.userContact.emails :null
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
        home.geometry ? home.geometry : null,
        home.id ? home.id : null
    )
}