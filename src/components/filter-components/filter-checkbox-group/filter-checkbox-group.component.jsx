import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import CustomCheckbox from '../../commons/custom-checkbox/custom-checkbox.component';

import {
    FilterCheckboxContainer,
    FilterTitle,
    FilterCheckbox
  } from './filter-checkbox-group.styles';

const FilterCheckboxGroup = ({title, data}) => {
    return (
        <FilterCheckboxContainer>
            <FilterTitle>
                {title}
            </FilterTitle>
            <FilterCheckbox>
                <CustomCheckbox data={data}/>
            </FilterCheckbox>
        </FilterCheckboxContainer>
    )
}

export default FilterCheckboxGroup;