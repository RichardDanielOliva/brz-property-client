import React from 'react';

import {
    CustomSelectContainer,
    AuxiliarRelativeContainer,
    Select,
    Option,
    Icon
  } from './custom-select.styles';

const CustomSelect = ({name, value, data, handleOnChange}) => {
    console.log(data)
    return (
        <CustomSelectContainer>
            <AuxiliarRelativeContainer>
                <Select 
                    aria-label={`filter-select-${name}`}
                    value={value} id={`filter-select-${name}`} 
                    onChange={(event)=> handleOnChange(event.target.value)}>
                    {data.map(({title, value}) => {
                        return (<Option key={`filter-select-${value}`} className={`custom-select-option`} value={value}>
                            {title}
                        </Option> )
                        })}
                </Select>
                <Icon/>
            </AuxiliarRelativeContainer>
        </CustomSelectContainer>
    )
}

export default CustomSelect;