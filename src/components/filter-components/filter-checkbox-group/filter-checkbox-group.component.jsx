import React from 'react';

import CustomCheckbox from '../../commons/custom-checkbox/custom-checkbox.component';

import {
    FilterCheckboxContainer,
    FilterTitle,
    FilterCheckbox
  } from './filter-checkbox-group.styles';

const FilterCheckboxGroup = ({title, ...props}) => {
    return (
        <FilterCheckboxContainer>
            <FilterTitle>
                {title}
            </FilterTitle>
            <FilterCheckbox>
                <CustomCheckbox {...props}/>
            </FilterCheckbox>
        </FilterCheckboxContainer>
    )
}

export default FilterCheckboxGroup;