import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import PropertyCard from '../property-card/property-card.component';

import { PropertyCardListContainer } from './property-card-list.style';
import EXAMPLE_PROPERTY_DATA from './property.data';

const PropertyCardList = () => {
    const { t } = useTranslation();
    const servicesInfo = t('homePage.services');
    const properties= EXAMPLE_PROPERTY_DATA;
    console.log(EXAMPLE_PROPERTY_DATA);
    return (
        <PropertyCardListContainer>
            {properties.map(({...props}) => {
                return (<PropertyCard {...props}/>)
            })}
        </PropertyCardListContainer>
     )
};
  
export default PropertyCardList;

