export class Property{
    constructor (features, advertiser, location, images, geometry, id){
        this.features = features;
        this.location = location;
        this.advertiser = advertiser;
        this.images = images;
        this.geometry = geometry;
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

export  class OfficeFeature{
    constructor (status, area, extra, buildingArea, baths, buildingAge, energyCertificate){
        this.extras = extra;
        this.status = status; 
        this.area = area;
        this.buildingArea = buildingArea; 
        this.baths = baths; 
        this.buildingAge = buildingAge;
        this.energyCertificate = energyCertificate;
    }
}

export  class PremiseFeature{
    constructor (status, area, extra, buildingArea, baths, buildingAge, energyCertificate, type){
        this.extras = extra;
        this.status = status; 
        this.area = area;
        this.buildingArea = buildingArea; 
        this.baths = baths; 
        this.buildingAge = buildingAge;
        this.energyCertificate = energyCertificate;
        this.type = type; 
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
        this.userContact = UserContact;
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
