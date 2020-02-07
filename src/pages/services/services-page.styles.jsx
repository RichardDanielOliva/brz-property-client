import styled from 'styled-components';

export const ServicesPageContainer = styled.div`
  top: 80px;
  position: relative;
  display: flex;
  width: 100%;
  height: 50vh;
  overflow: hidden;
  margin: auto;
  flex-direction: column;

  @media (min-width: 998px) {
    height: 100vh;
    top: 0;

    width: calc(100vw - 90px);
    margin-left: 90px;
  }

  @media only screen and (min-width: 1198px){
    width: calc(100vw - 100px);
    margin-left: 100px;
  }

  background-image: linear-gradient(to bottom,rgba(0, 41,115,0.5),rgba(0, 41, 115, 0.9),rgba(0, 41, 115,1));
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

export const ServicesCardListContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 88%;
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

export const BackgroundSearchImage = styled.img`
  width: 100vw;
  z-index: -1;
  height: auto;
  left: 0;
  position: absolute;
`;



