export class Property{
    constructor (features, advertiser, location, images, id){
        this.features = features;
        this.location = location;
        this.advertiser = advertiser;
        this.images = images;
        this._id = id;
    }
}

export class PropertyList{
    constructor (properties, page){
        this.page = page;
        this.properties = properties;
    }
}

export class Location {
    constructor (addressed, city, state, country, postalCode, streetId){
        this.addressed = addressed;
        this.city = city;
        this.state = state;
        this.country = country;
        this.postalCode = postalCode;
        this.streetId = streetId;
    }
}

export  class HomeFeature{
    constructor (type, status, area, extra, buildingArea, baths, rooms, buildingAge, energyCertificate){
        this.extras = extra;
        this.type = type; 
        this.status = status; 
        this.area = area;
        this.buildingArea = buildingArea; 
        this.baths = baths; 
        this.rooms = rooms;
        this.buildingAge = buildingAge;
        this.energyCertificate = energyCertificate;
    }
}

export class Advertiser{
    constructor (operation, propertyMessage, UserContact, publishDate, price, userid){
        this.userid =  userid;
        this.operation =  operation;
        this.propertyMessage = propertyMessage;
        this.UserContact = UserContact;
        this.publishDate = publishDate;
        this.price = price;
    }
}

export class UserContact{
    constructor (phones, emails){
        this.phones =  phones;
        this.emails =  emails;
    }
}
