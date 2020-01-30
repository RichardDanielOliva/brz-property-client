import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import PropertyCard from '../property-card/property-card.component';

import { PropertyCardListContainer, PropertyCardContainer } from './property-card-list.style';
import EXAMPLE_PROPERTY_DATA from './property.data';

const PropertyCardList = ({filter, properties}) => {
    const { t } = useTranslation();
    const properties2= EXAMPLE_PROPERTY_DATA;
    
    //const propertiesList = getPropertyList(property);
    console.log(properties);
    return (
        <PropertyCardListContainer>
            {properties2.properties.map(({...props}) => {
                return (
                    <PropertyCardContainer>
                        <PropertyCard {...props}/>
                    </PropertyCardContainer>
                )})}
        </PropertyCardListContainer>
     )
};

const mapStateToProps = state => ({
    filter: {
        type: state.filter.propertyType,
        operation: state.filter.propertyOperation,
        price: {
            min: state.filter.propertyMinPrice,
            max: state.filter.propertyMaxPrice,
        },
        area:{
            from: state.filter.homeAreaFrom,
            to: state.filter.homeAreaTo
        },
        home: {
            rooms: state.filter.homeRooms,
            baths: state.filter.homeBathRooms,
            extras: state.filter.homeExtras,
        },
        status: state.filter.homeStatus,
    },
    properties: state.properties.data
});
  
export default connect(mapStateToProps)(PropertyCardList);

