import React from 'react';

import CustomSelect from '../../commons/custom-select/custom-select.component';

import {
    FilterGroupContainer,
    FilterTitle,
    FilterOptionsContainer,
    FilterOptionContainer
  } from './filter-basic-group.styles';

const FilterBasicGroup = ({title, dataGroup}) => {
    return (
        <FilterGroupContainer>
            <FilterTitle>
                {title}
            </FilterTitle>
            <FilterOptionsContainer>
                {dataGroup.map(({name, ...props}) => {
                    return(
                        <FilterOptionContainer key={`filter-option-${name}`}>
                            <CustomSelect name={name} {...props}/>
                        </FilterOptionContainer>
                    )})}
            </FilterOptionsContainer>
        </FilterGroupContainer>
    )
}

export default FilterBasicGroup;