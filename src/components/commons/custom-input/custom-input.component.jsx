import React from 'react';

import {
    CustomSelectContainer,
    AuxiliarRelativeContainer,
    Input,
    Icon
  } from './custom-input.styles';

const CustomInput = ({name, type, placeholder, value, handleOnChange}) => {
    return (
        <CustomSelectContainer>
            <AuxiliarRelativeContainer>
                <Input 
                    id={`filter-input-${name}`} 
                    aria-label={`filter-input-${name}`}
                    type={type}
                    value={value} 
                    placeholder={placeholder}
                    onChange={(event)=> handleOnChange(event.target.value)}>
                </Input>
                <Icon />
            </AuxiliarRelativeContainer>
        </CustomSelectContainer>
    )
}

export default CustomInput;