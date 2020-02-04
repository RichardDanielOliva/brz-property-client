import React from 'react';

import backgroundSearchImageUrl from '../../assets/img/home-search.jpg';

//Components
import ServiceCardList from '../../components/services-card-list/services-card-list.component';
import Header from '../../components/header/header.component';

//Styles
import {
  ServicesPageContainer,
  HeaderContainer,
  ServicesCardListContainer,
  BackgroundSearchImage
} from './services-page.styles';

const ServicesPage = () => {
  return (
    <ServicesPageContainer>
      <HeaderContainer>
        <Header/>
      </HeaderContainer>
      <ServicesCardListContainer>
        <ServiceCardList/>
      </ServicesCardListContainer>
      <BackgroundSearchImage src={backgroundSearchImageUrl} alt="item"/>
    </ServicesPageContainer>
  );
};

export default ServicesPage;
