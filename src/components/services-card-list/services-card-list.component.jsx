import React from 'react';
import { useTranslation } from 'react-i18next';

import ServicesCard from '../services-card/services-card.component';

import { 
    ServiceCardListContainer,
    CardHeader,
    Title,
    CardBody,
    ServiceCardContainer 
} from './services-card-list.style';

const ServiceCardList = () => {
    const { t } = useTranslation();
    const servicesInfo = t('homePage.services');

    return (
        <ServiceCardListContainer>
            <CardHeader>
                <Title>How can we help you?</Title>
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

