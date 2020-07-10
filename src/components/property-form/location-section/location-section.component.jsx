import React, { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import LocationSearchInput from '../../commons/location-search-input/location-search-input.component';

import { 
    setFormStep,
    setLocationByCoordinatePicker, 
    setLocationAttributte
 } from '../../../redux/property-form/property-form.actions';

import {
    SectionContainer,
    SectionTitle,
    Input,
    ButtonText,
    FormOptions
} from '../property-form.styles';


const LocationSection = ({location, latitude, logitude, coordinates, setLocationByCoordinatePicker, setLocationAttributte, setFormStep}) => {
    const { t } = useTranslation();
    let zoom = 14;
    const commonsOptions = t('propertyFilter.operation');
    let [ locationMethod, setLocationMethod] = useState('map')
    let position =  [ latitude, logitude ]

    let [invalidCountry, setInvalidCountry] = useState(false)
    let [invalidState, setInvalidState] = useState(false)
    let [invalidCity, setInvalidCity] = useState(false)
    let [invalidAddressed, setInvalidAddressed] = useState(false)
    let [invalidPC, setInvalidPC] = useState(false)

    if((location.country || location.country !== '') && invalidCountry)
        setInvalidCountry(false)
    
    if((location.state || location.state !== '') && invalidState)
        setInvalidState(false)

    if((location.city || location.city !== '') && invalidCity)
        setInvalidCity(false)

    if((location.addressed || location.addressed !== '') && invalidAddressed)
        setInvalidAddressed(false)

    if((location.postalCode || location.postalCode !== '') && invalidPC)
        setInvalidPC(false)

    return (
        <SectionContainer>
            <SectionTitle>Location</SectionTitle>
            {
                locationMethod === 'form' ?
                <Fragment>
                    <div class="row">
                        <div class="form-group col-4">
                            <label for={"location-country"}>*Country</label>
                            <Input 
                                id="location-country" 
                                type="text" 
                                placeholder='Country' 
                                value={location.country}
                                onChange={ e => setLocationAttributte('country', e.target.value)}
                                />
                            {invalidCountry && 
                            <div class="alert alert-danger" role="alert">
                                {invalidCountry}
                            </div>}
                        </div>
                        <div class="form-group col-4">
                            <label for={"location-state"}>*State</label>
                            <Input 
                                id="location-state" 
                                type="text" 
                                placeholder='State' 
                                value={location.state}
                                onChange={ e => setLocationAttributte('state', e.target.value)}
                                />
                            {invalidState && 
                            <div class="alert alert-danger" role="alert">
                                {invalidState}
                            </div> }                              
                        </div>
                        <div class="form-group col-4">
                            <label for={"location-city"}>*City</label>
                            <Input 
                                id="location-city" 
                                type="text" 
                                placeholder='City' 
                                value={location.city}
                                onChange={ e => setLocationAttributte('city', e.target.value)}
                                />
                            {invalidCity && 
                            <div class="alert alert-danger" role="alert">
                                {invalidCity}
                            </div>}
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-8">
                            <label for={"location-country"}>*Addressed</label>
                            <Input 
                                id="location-addressed" 
                                type="text" 
                                placeholder='Addressed' 
                                value={location.addressed}
                                onChange={ e => setLocationAttributte('addressed', e.target.value)}
                                />
                            {invalidAddressed && 
                            <div class="alert alert-danger" role="alert">
                                {invalidAddressed}
                            </div>}
                        </div>
                        <div class="form-group col-4">
                            <label for={"location-country"}>*Postal code</label>
                            <Input 
                                id="location-postalCode" 
                                type="number" 
                                placeholder='Postal code' 
                                value={location.postalCode}
                                onChange={ e => setLocationAttributte('postalCode', e.target.value)}
                                />
                            {invalidPC && 
                            <div class="alert alert-danger" role="alert">
                                {invalidPC}
                            </div>}
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-6">
                            <label for={"location-longitude"}>Longitude</label>
                            <Input 
                                id="location-longitude" 
                                type="text" 
                                placeholder='Longitude' 
                                className="form-control"
                                value={coordinates ? coordinates[1] : ''}
                                disabled
                                //onChange={ e => setFeatureAttributte('buildingArea', e.target.value)}
                                />
                        </div>
                        <div class="form-group col-6">
                            <label for={"location-latitude"}>Latitude</label>
                            <Input 
                                id="location-latitude" 
                                type="text" 
                                placeholder='Latitude' 
                                className="form-control"
                                value={coordinates ? coordinates[0] : ''}
                                readonly
                                disabled
                                //onChange={ e => setFeatureAttributte('buildingArea', e.target.value)}
                                />
                        </div>
                    </div>
                </Fragment> :
                <div class="row">
                    <div class="form-group col-8" style={{height: 450}}>
                        <Map 
                            center={position} 
                            zoom={zoom}
                            onClick={(event) => {
                                setLocationByCoordinatePicker(event)
                            }}
                            >                            
                            <TileLayer 
                                url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
                            />
                            {coordinates && <Marker
                                position={coordinates}/>}
                            {/*properties.properties.map(({geometry, ...props}) => {
                                return (
                                    <Marker position={geometry.coordinates}>
                                        <Popup closeButton={false}>
                                            <PropertyCard {...props}/> 
                                        </Popup>
                                    </Marker>
                                )})*/}
                        </Map>
                    </div>
                    <div class="form-group col-4" style={{height: 50}}>
                        <label for={"location-country"}>*Go to</label>
                        <LocationSearchInput/>
                    </div>
                </div>
            }
            <FormOptions>
                <button 
                    class="btn btn-primary"
                    onClick={(event) => {
                        event.preventDefault();
                        if(locationMethod=== 'map')
                            setFormStep(1)
                        else
                            setLocationMethod('map')
                    }}>
                    <ButtonText>Previus step</ButtonText>
                </button>
                { locationMethod === 'map' ?
                <button 
                    class="btn btn-primary"
                    onClick={(event) => {
                        event.preventDefault();
                        setLocationMethod('form')
                    }}>
                    <ButtonText>{'Validate location'}</ButtonText>
                </button> :
                <button 
                    onClick={(event) => {
                        event.preventDefault();
                        let isValidForm = true

                        if(!location.country && location.country === ''){
                            setInvalidCountry("Please one country")
                            isValidForm = false
                        }else
                            setInvalidCountry('')  
                        
                        if(!location.state && location.state === ''){
                            setInvalidState("Please one state")
                            isValidForm = false
                        }else
                            setInvalidState('')
                    
                        if(!location.addressed && location.addressed === ''){
                            setInvalidAddressed("Please one addressed")
                            isValidForm = false
                        }else
                            setInvalidAddressed('')  
                        
                        if(!location.city && location.city === ''){
                            setInvalidCity("Please one city")
                            isValidForm = false
                        }else
                            setInvalidCity('')
                    
                        if(!location.postalCode && location.postalCode === ''){
                            setInvalidPC("Please one Postal Code")
                            isValidForm = false
                        }else
                            setInvalidPC('')

                        if(isValidForm)
                            setFormStep(3)}
                    }
                    class="btn btn-primary">
                    <ButtonText>Next step</ButtonText>
                </button>
            }
            </FormOptions>
        </SectionContainer>
      )
}

const mapStateToProps = state => ({
    location: state.propertyForm.location,
    coordinates: state.propertyForm.coordinates,
    latitude: state.filter.latitude,
    logitude: state.filter.logitude,
})

const mapDispatchToProps = dispatch => ({
    setLocationByCoordinatePicker: (event) => 
        dispatch(setLocationByCoordinatePicker(event)),
    setLocationAttributte: (attributte, value) => 
        dispatch(setLocationAttributte(attributte, value)), 
    setFormStep: (attributte) => 
        dispatch(setFormStep(attributte)),
});

  
export default connect(mapStateToProps, mapDispatchToProps)(LocationSection);