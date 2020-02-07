import React from 'react';

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

export default HomePage;
