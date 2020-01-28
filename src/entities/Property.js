export class Property{
    constructor (features, advertiser, location, extras, images){
        this.features = features;
        this.location = location;
        this.advertiser = advertiser;
        this.extras = extras;
        this.images = images;
    }
}

export class Location {
    constructor (addressed, city, state, country, postalCode){
        this.addressed = addressed;
        this.city = city;
        this.state = state;
        this.country = country;
        this.postalCode = postalCode;
    }
}

export class Advertiser {
    constructor (operation, propertyMessage, phone, publishDate, price, id){
        this.id =  id;
        this.operation =  operation;
        this.propertyMessage = propertyMessage;
        this.phone = phone,
        this.publishDate = publishDate;
        this.price = price;
    }
}

export class HomeFeature{
    constructor (type, status, area, buildingArea, baths, rooms, buildingAge, energyCertificate){
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