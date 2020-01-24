import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import ServicesCard from '../services-card/services-card.component';

import { PropertyCardListContainer } from './property-card-list.style';

const PropertyCardList = () => {
    const { t } = useTranslation();
    const servicesInfo = t('homePage.services');

    return (
        <PropertyCardListContainer>
            {servicesInfo.map(({...props}) => {
                return (<ServicesCard {...props}/>)
            })}
        </PropertyCardListContainer>
     )
};
  
export default PropertyCardList;

