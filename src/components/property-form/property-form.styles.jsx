import styled from 'styled-components';
import { IoIosArrowDown, IoIosCreate, IoIosCloseCircle } from 'react-icons/io';

export const PropertyFormContainer = styled.div`
  width: 100%;
  padding: 2%;  
`;

export const HtmlForm = styled.form`

`;

export const SectionContainer = styled.div`
  width: 100%;
  padding: 5%;  
`;

export const ContactSection = styled.div`
`;

export const RowForm = styled.div`
  display: flex;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  &[disabled] {
    opacity: .3;
  }
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
`

export const SectionTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  padding: 8px 0;
`

export const FormOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonText =  styled.h4`
  margin: 0;
  padding: 0;
`;

export const EditIcon = styled(IoIosCreate)`
  color: #74c300;
  height: 100%;
`

export const SlideShowContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

`; 

export const MapSelectionContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LocationInputContainer = styled.div`
  width: 200px;
  z-index: 2;
`;

export const MapContainer = styled.div`
  width: 800px;
  height: 450px;
  z-index: 1;
`;