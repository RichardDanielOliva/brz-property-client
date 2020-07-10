import styled from 'styled-components';

//const BorderColor = '#FFCC00';

export const HomeSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-content: space-around;
  align-items: center;
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%
  height: 50px;

  @media only screen and (min-width: 770px){
    width: 90%
    height: 60px;
  }

  @media only screen and (min-width: 1198px){
    width: 65%
    height: 65px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  height: 65px;
  width: 100%

  @media only screen and (min-width: 770px){
    width: 95%
  }

  @media only screen and (min-width: 1198px){
    width: 70%
  }
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.15);
`;

export const CustomSearchInputContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%
  height: 50px;

  @media only screen and (min-width: 770px){
    width: 90%
    height: 60px;
  }

  @media only screen and (min-width: 1198px){
    width: 65%
    height: 65px;
  }

  a{
    text-decoration: none;
  }
`;

export const ButtonText =  styled.h4`
  margin: 0;
  padding: 0;
`;

export const Icon =  styled.i`
  margin-right:7px;
`;

export const IconLeft =  styled.i`
  margin-left:7px;
`;