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

const FilterBasicGroup = ({title, dataGroup, filterState}) => {
    return (
        <FilterGroupContainer>
            <FilterTitle>
                {title}
            </FilterTitle>
            <FilterOptionsContainer>
                {dataGroup.map(({...props}) => {
                    return(
                        <FilterOptionContainer>
                            <CustomSelect {...props} filterState={filterState}/>
                        </FilterOptionContainer>
                    )})}
            </FilterOptionsContainer>
        </FilterGroupContainer>
    )
}

export default FilterBasicGroup;