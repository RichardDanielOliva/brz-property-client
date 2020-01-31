import React from 'react';
//Redux
import { connect } from 'react-redux';
//Hook mediaQuery
import { useMediaQuery } from '../../effects/useMediaQuery.effect';

import backgroundSearchImageUrl from '../../assets/img/home-search.jpg';

//Components
import HomeSearch from '../../components/home-search/home-search.component';
import Header from '../../components/header/header.component';

//Styles
import {
  HomePageContainer,
  HeaderContainer,
  MainSearchContainer,
  MainSearchTitleContainer,
  SearchContainer,
  BackgroundSearchImage
} from './home-page.styles';

const HomePage = () => {
  return (
    <HomePageContainer>
      <HeaderContainer>
            <Header/>
      </HeaderContainer>
      <MainSearchContainer>
        <MainSearchTitleContainer>
          {/**<i className="fas fa-map-marked-alt fa-3x"/>*/}
          Encuentra dónde vas a vivir
        </MainSearchTitleContainer>
        <SearchContainer>
          <HomeSearch/>
        </SearchContainer>
      </MainSearchContainer>
      <BackgroundSearchImage src={backgroundSearchImageUrl} alt="item"/>
    </HomePageContainer>
  );
};

const mapStateToProps = state => ({
});

export default connect(
  mapStateToProps,
  null
)(HomePage);
