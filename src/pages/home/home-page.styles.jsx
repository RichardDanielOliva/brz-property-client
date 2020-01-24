import styled from 'styled-components';

export const HomePageContainer = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  flex-direction: column;

  @media (min-width: 770px) {
    width: 100%;
  }
`;

export const MainSearchContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;
  overflow: hidden;
  justify-content: center;
  align-items: center;

  background-image: linear-gradient(to bottom, rgba(255, 204, 0,0.2),rgba(255, 204, 0, 0.7), rgba(255, 204, 0,1));
`;

export const MainSearchTitleContainer = styled.h1`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: rgba(0,0,0,0.9);
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 50%;
  height: 35%;
  z-index: 1;
`;

export const BackgroundSearchImage = styled.img`
  width: 100vw;
  z-index: -1;
  height: auto;
  left: 0;
  position: absolute;
`;

export const ServicesContainer = styled.div`
  display: flex;  
  width: 100%;
`;



