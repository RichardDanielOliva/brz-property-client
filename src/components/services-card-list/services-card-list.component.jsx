import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import ServicesCard from '../services-card/services-card.component';

import { 
    ServiceCardListContainer,
    CardHeader,
    CardBody,
     ServiceCardContainer 
} from './services-card-list.style';

const ServiceCardList = () => {
    const { t } = useTranslation();
    const servicesInfo = t('homePage.services');

    return (
        <ServiceCardListContainer>
            <CardHeader>
                <h1>Services</h1>
                <h2>How can we help you?</h2>
            </CardHeader>
            <CardBody>
                {servicesInfo
                    .filter((item, index)=> index <=2)
                    .map(({...props}) => {
                    return (
                        <ServiceCardContainer>
                            <ServicesCard {...props}/>
                        </ServiceCardContainer> 
                    )
                })}
            </CardBody>
        </ServiceCardListContainer>
     )
};
  
export default ServiceCardList;

