import styled from 'styled-components';

export const HomePageContainer = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  flex-direction: column;

  @media (min-width: 770px) {
    width: 100%;
  }

  @media (min-width: 1200px) {
    width: 100%;
    padding: 0 calc((100% - 1600px) / 2);
  }
`;

export const MainSearchContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 55vh;
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
  color: white;

  background-image: radial-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.1), rgba(0,0,0,0.0));
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 60%;
  height: 60%;
  z-index: 1;
`;

export const BackgroundSearchImage = styled.img`
  width: 100vw;
  z-index: 0.7;
  height: auto;
  left: 0;
  position: absolute;
`;

export const ServicesContainer = styled.div`
  display: flex;  
  width: 100%;
`;



