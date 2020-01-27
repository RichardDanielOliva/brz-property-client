import styled, { css } from 'styled-components';

const backgroundColor = '#FFF';

export const PropertyCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 50vh;

  box-shadow: 0 1px 2px 0 rgba(102,102,100,0.24);
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 60%;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0,0,0,0.8);
  color: rgba(250,250,250,1);
  height: 40%;
  width: 100%;
`;

export const PublishDate = styled.h3`
  margin: 0;
`
export const Direction = styled.h3`
  margin: 0;
`
export const Type = styled.h3`
  margin: 0;
`
export const Price = styled.h3`
  margin: 0;
`
export const FeaturesContainer = styled.div`
`



export const PropertyImage = styled.img`
  width:100%;
  height:auto;
`;



export const TextContainer = styled.div`
  padding: 0% 5%;
`;

export const Title = styled.h2`
  display: flex;
`;

export const Description = styled.p`
  display: flex;
`;

export const Button = styled.button`
  display: table-cell;
  background-color: rgba(0,0,0,0.0);
  color: rgba(250,250,250,1);

  border: none;
  border-top: 1px solid #fff;
  overflow: hidden;

  cursor: pointer;

  vertical-align: middle;

  width: 100%;
  height: 50px;
  line-height: 30px;

  font-size: 1rem;
  font-weight: bolder;
`;

export const Icon = styled.i`
  margin-left:7px;
`;

export const FooterContainer = styled.div`
  display: flex;
`;