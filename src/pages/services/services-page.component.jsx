import React from 'react';
//Redux
import { connect } from 'react-redux';
//Hook mediaQuery
import { useMediaQuery } from '../../effects/useMediaQuery.effect';

import backgroundSearchImageUrl from '../../assets/img/home-search.jpg';

//Components
import ServiceCardList from '../../components/services-card-list/services-card-list.component';

//Styles
import {
  ServicesPageContainer,
  ServicesTitleContainer,
  ServicesCardListContainer,
  BackgroundSearchImage
} from './services-page.styles';

const ServicesPage = () => {
  return (
    <ServicesPageContainer>
      <ServicesCardListContainer>
        <ServiceCardList/>
        <BackgroundSearchImage src={backgroundSearchImageUrl} alt="item"/>
      </ServicesCardListContainer>
    </ServicesPageContainer>
  );
};

const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps,
  null
)(ServicesPage);