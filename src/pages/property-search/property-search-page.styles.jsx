import styled from 'styled-components';

export const PropertySearchPageContainer = styled.div`
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