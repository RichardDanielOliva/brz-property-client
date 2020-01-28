import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import ServicesCard from '../services-card/services-card.component';

import { ServiceCardListContainer, ServiceCardContainer } from './services-card-list.style';

const ServiceCardList = () => {
    const { t } = useTranslation();
    const servicesInfo = t('homePage.services');

    return (
        <ServiceCardListContainer>
            {servicesInfo
                .filter((item, index)=> index <=2)
                .map(({...props}) => {
                return (
                    <ServiceCardContainer>
                        <ServicesCard {...props}/>
                    </ServiceCardContainer> 
                )
            })}
        </ServiceCardListContainer>
     )
};
  
export default ServiceCardList;

