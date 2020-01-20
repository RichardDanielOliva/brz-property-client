import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import ServicesCard from '../services-card/services-card.component';

import { ServiceCardListContainer } from './services-card-list.style';

const ServiceCardList = () => {
    const { t } = useTranslation();
    const servicesInfo = t('homePage.services');

    return (
        <ServiceCardListContainer>
            {servicesInfo.map(({...props}) => {
                return (<ServicesCard {...props}/>)
            })}
        </ServiceCardListContainer>
     )
};
  
export default ServiceCardList;

