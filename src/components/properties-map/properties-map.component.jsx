import React from 'react';
import { connect } from 'react-redux';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import PropertyCard from '../property-card/property-card.component'

const PropertiesMap= ({latitude, logitude, properties}) => {
    let position = [latitude, logitude]

    console.log(properties)
    return (
        <Map center={position} zoom="13">
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {properties.properties.map(({geometry, ...props}) => {
                return (
                    <Marker position={geometry.coordinates}>
                        <Popup>
                        {/**A pretty CSS3 popup. <br /> Easily customizable.*/}
                        <PropertyCard {...props}/> 
                    </Popup>
                </Marker>
            )})}

        </Map>
     )
};

const mapStateToProps = state => ({
    latitude: state.filter.latitude,
    logitude: state.filter.logitude,
    properties: state.properties.data
});

  
export default connect(mapStateToProps)(PropertiesMap);

