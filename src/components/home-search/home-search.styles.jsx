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

  border-left: 25px solid ${BorderColor};
  background-color: rgba(0,0,0,0.8);
`;

export const OptionsContainer = styled.div`
  display: flex;
`;

export const SearchContainer = styled.div`
  display: flex;
`;

export const CustomSearchInputContainer = styled.div`
  display: flex;
  height: 100%;
  width: 300px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

