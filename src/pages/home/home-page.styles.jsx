import styled from 'styled-components';

export const HomePageContainer = styled.div`
  top: 80px;
  position: relative;
  display: flex;
  width: 100%;
  height: 50vh;
  overflow: hidden;
  margin: auto;
  flex-direction: column;

  @media (min-width: 998px) {
    width: 100%;
    height: 100vh;

    top: 0;
    width: calc(100vw - 90px);
    margin-left: 90px;
  }

  @media only screen and (min-width: 1198px){
    width: calc(100vw - 100px);
    margin-left: 100px;
  }

  background-image: linear-gradient(to bottom, rgba(255, 204, 0,0.5),rgba(255, 204, 0, 0.9), rgba(255, 204, 0,1));
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 12%;
  flex-direction: column;

  @media (min-width: 770px) {
    width: calc(100vw - 100px);
    margin-left: 100px;
  }
`;

export const MainSearchContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 80vh;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

export const MainSearchTitleContainer = styled.h1`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgba(0,0,0,0.9);
  margin: 0;
  margin-bottom: 30px;
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 90%;
  height: 50%;
  z-index: 1;

  @media only screen and (min-width: 996px){
    width: 88%;
  }

  @media only screen and (min-width: 1198px){
    width: 85%;
  }

`;

export const BackgroundSearchImage = styled.img`
  width: 100vw;
  z-index: -1;
  height: auto;
  left: 0;
  position: absolute;

  @media only screen and (min-width: 770px){
    width: 170vw;
  }

  @media only screen and (min-width: 1198px){
    width: 100vw;
  }
`;

export const ServicesContainer = styled.div`
  display: flex;  
  width: 100%;
`;



