import React from 'react';
//Redux
import { connect } from 'react-redux';
//Hook mediaQuery
import { useMediaQuery } from '../../effects/useMediaQuery.effect';

import backgroundSearchImageUrl from '../../assets/img/home-search.jpg';

//Components
import HomeSearch from '../../components/home-search/home-search.component';
import ServiceCardList from '../../components/services-card-list/services-card-list.component';

//Styles
import {
  HomePageContainer,
  MainSearchContainer,
  MainSearchTitleContainer,
  SearchContainer,
  BackgroundSearchImage,
  ServicesContainer
} from './home-page.styles';

const HomePage = () => {
  return (
    <HomePageContainer>
      <MainSearchContainer>
        <MainSearchTitleContainer>Encuentra dónde vas a vivir</MainSearchTitleContainer>
        <SearchContainer>
          <HomeSearch/>
        </SearchContainer>
        <BackgroundSearchImage src={backgroundSearchImageUrl} alt="item"/>
      </MainSearchContainer>
      <ServicesContainer>
        <ServiceCardList/>
      </ServicesContainer>
    </HomePageContainer>
  );
};

const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps,
  null
)(HomePage);
