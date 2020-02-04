import React from 'react';
import { useTranslation } from 'react-i18next';

import FilterBasicGroup from './filter-basic-group/filter-basic-group.component';
import FilterCheckboxGroup from './filter-checkbox-group/filter-checkbox-group.component';


import {
    FilterPropertyContainer,
    GroupContainer
  } from './filter-property.styles';

const getAppropriateGroup= ({optionType, name, ...props}) => {
    switch (optionType) {
        case "basic-group":
            return <FilterBasicGroup name={name} {...props}/>
        case "checkbox-group":
            return <FilterCheckboxGroup name={name} {...props}/>
        default:
            break;
    }
}

const getEspecificData = (t) => {
    let key = "provisional"
    switch (key) {
        case "provisional":
            return t('propertySearchResult.filter.home');
        default:
            break;
    }
}

const FilterProperty = () => {
    const { t } = useTranslation();
    const commonsOptions = t('propertySearchResult.filter.commons');
    const specificData = getEspecificData(t);

    return (
        <FilterPropertyContainer>
                <div>
                {commonsOptions.map(({name, ...props}) => {
                    return(
                        <GroupContainer key={`filter-property-${name}`}>
                            <FilterBasicGroup name={name} {...props} />
                        </GroupContainer>
                    )
                    })}
                </div>
                <div>
                {specificData.map(({name, ...args}) => {
                    return(
                        <GroupContainer key={`filter-property-${name}`}>
                            {getAppropriateGroup(args, name)}
                        </GroupContainer>
                    )
                })}
                </div>
        </FilterPropertyContainer>
    )
}

export default FilterProperty;
