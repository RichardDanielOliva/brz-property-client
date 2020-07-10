import React from 'react';
import ErrorImgRef from '../../assets/logos/provisional_logo.png';
//Styles
import {
    ErrorNoPropertyContainer,
    ErrorImage
} from './error-no-property.styles';

const ErrorNoProperty = () => {
  return (
    <ErrorNoPropertyContainer>
        <h2>Sorry, no property to display</h2>
        <ErrorImage src={ErrorImgRef}/>
    </ErrorNoPropertyContainer>
  );
};

export default ErrorNoProperty;