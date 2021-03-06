import {Property,PropertyList,UserContact,PremiseFeature, Advertiser, Location, HomeFeature, OfficeFeature} from '../models/Property';

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
    let homes = json._embedded.properties || json._embedded.homes;
    let properties = homes.map((home)=>
                            mapJsonHomeToProperty(home))
    let page = json.page ? json.page : null;
    return new PropertyList(properties, page)
}

const mapJsonToOfficesList = (json) => {
    let offices = json._embedded.properties || json._embedded.offices;
    let properties = offices.map((office)=>
                                mapJsonOfficeToProperty(office))
    let page = json.page;
    return new PropertyList(properties, page)
}

const mapJsonToPremisesList = (json) => {
    let premises = json._embedded.properties  || json._embedded.premises;
    let properties = premises.map((premise)=>
        mapJsonPremiseToProperty(premise))
    let page = json.page;
    return new PropertyList(properties, page)
}

export const mapJsonProperty = (json, type) => {
    switch (type) {
        case "HOME":
            return mapJsonHomeToProperty(json);
        case "PREMISE":
            return mapJsonPremiseToProperty(json);
        case "OFFICE":
            return mapJsonOfficeToProperty(json);
        default:
            break;
    }
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

const mapJsonPremiseToProperty = (premise) => {
    return new Property(
        new PremiseFeature(
            premise.status ? premise.status : null,
            premise.area ? premise.area : null, 
            premise.extras ? premise.extras : null,
            premise.buildingArea ? premise.buildingArea:null, 
            premise.baths ? premise.baths : null, 
            premise.buildingAge ? premise.buildingAge : null, 
            premise.energyCertificate ? premise.energyCertificate : null,
            premise.type ? premise.type : null,
        ),
        new Advertiser(
            premise.advertiser.operation ? premise.advertiser.operation : null, 
            premise.advertiser.propertyMessage ? premise.advertiser.propertyMessage : null, 
            new UserContact(
                premise.advertiser.userContact.phones ? premise.advertiser.userContact.phones:null,
                premise.advertiser.userContact.emails ? premise.advertiser.userContact.emails :null
            ), 
            premise.advertiser.publishDate ? premise.advertiser.publishDate : null, 
            premise.advertiser.price ? premise.advertiser.price : null, 
            premise.advertiser.userid ? premise.advertiser.userid : null
            ),
        new Location(
            premise.location.addressed ? premise.location.addressed : null, 
            premise.location.city ? premise.location.city:null, 
            premise.location.state ? premise.location.state:null, 
            premise.location.country ? premise.location.country:null, 
            premise.location.postalCode ? premise.location.postalCode:null, 
            premise.location.streetId ? premise.location.streetId:null
        ),
        premise.images ? premise.images : null,
        premise.geometry ? premise.geometry : null,
        premise.id ? premise.id : null
    )
}