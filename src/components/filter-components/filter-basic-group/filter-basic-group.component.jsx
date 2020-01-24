import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

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
                {dataGroup.map(({...props}) => {
                    return(
                        <FilterOptionContainer>
                            <CustomSelect {...props}/>
                        </FilterOptionContainer>
                    )})}
            </FilterOptionsContainer>
        </FilterGroupContainer>
    )
}

export default FilterBasicGroup;