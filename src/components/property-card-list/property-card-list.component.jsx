import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import PropertyCard from '../property-card/property-card.component';

import { PropertyCardListContainer, PropertyCardContainer } from './property-card-list.style';
import EXAMPLE_PROPERTY_DATA from './property.data';
import {getPropertyList} from '../../services/PropertyServices';

const PropertyCardList = ({...property}) => {
    const { t } = useTranslation();
    const properties= EXAMPLE_PROPERTY_DATA;
    
    getPropertyList(property);
    return (
        <PropertyCardListContainer>
            {properties.map(({...props}) => {
                return (
                    <PropertyCardContainer>
                        <PropertyCard {...props}/>
                    </PropertyCardContainer>
                )})}
        </PropertyCardListContainer>
     )
};

const mapStateToProps = state => ({
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
});
  
export default connect(mapStateToProps)(PropertyCardList);

