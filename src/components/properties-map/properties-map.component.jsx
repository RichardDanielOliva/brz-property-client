import React from 'react';
import { connect } from 'react-redux';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import PropertyCard from '../property-card/property-card.component'

const PropertiesMap= ({latitude, logitude, zoom, properties}) => {
    let position = [latitude, logitude]

    console.log(properties)
    return (
        <Map center={position} zoom={zoom}>
           <TileLayer 
                url='https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}'
                attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                ext= 'png'
            />
            
              {/** <TileLayer 
                url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
	            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
            />
            */}
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
    zoom: state.filter.zoom,
    properties: state.properties.data
});

  
export default connect(mapStateToProps)(PropertiesMap);

