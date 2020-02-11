import styled from 'styled-components';

//const backgroundColor = '#FFF';

export const PropertyCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  box-shadow: 1px 2px rgba(102,102,100,0.24);
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 70%;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  background-color: rgba(255, 255, 255, 0.8);
  margin: 15px;
`;

export const Type = styled.h4`
  font-size: 16px;
  font-weight: 400;
  overflow: hidden;

  margin: 0;
  padding: 0;
`
export const Direction = styled.h3`
  font-size: 20px;
  font-weight: 600;
  overflow: hidden;

  margin: 0;
  padding: 0;
`
export const TextColor = styled.span`
  margin: 0;
  padding: 0;
  color: #FFCC00;
`
export const Price = styled.h2`
  font-size: 26px;
  font-weight: 400;

  margin: 10px 0;
`
export const FeaturesContainer = styled.div`
  display: flex;
  justify-content: space-around;
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

  color: rgba(0,0,0,1);
  font-weight: bold;

  border: none;
  border-top: 1px solid #fff;
  overflow: hidden;

  cursor: pointer;

  vertical-align: middle;

  width: 100%;
  height: 50px;
  line-height: 30px;

  font-size: 18px;
  font-weight: 400;

  &:hover{
    background-color: rgba(0,0,0,0.1);
  }
`;

export const Icon = styled.i`
  margin-right: 7px;
  color: rgba(0,0,0,1);
`;

export const FooterContainer = styled.div`
  display: flex;
`;