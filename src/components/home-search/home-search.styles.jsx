import styled from 'styled-components';

const BorderColor = '#FFCC00';

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
`;

export const SearchContainer = styled.div`
  display: flex;
  height: 55px;
`;

export const CustomSearchInputContainer = styled.div`
  display: flex;
  height: 100%;
  width: 500px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

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