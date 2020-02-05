import React from 'react';
import { connect } from 'react-redux';
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

const getPriceData = (priceOptions, operationType = "BUY") => {
    switch (operationType) {
        case "BUY":
            return priceOptions.buyData;
        case "RENT":
                return priceOptions.rentData;
        case "SHARE":
            return priceOptions.shareData;
        default:
            break;
    }
}

const getEspecificData = (t, propertyType="HOME") => {
    switch (propertyType) {
        case "HOME":
            return t('propertySearchResult.filter.home');
        case "PREMISE":
                return t('propertySearchResult.filter.office');
        case "OFFICE":
            return t('propertySearchResult.filter.premise');
        default:
            break;
    }
}

const FilterProperty = ({propertyType, propertyOperation}) => {
    const { t } = useTranslation();
    const commonsOptions = t('propertySearchResult.filter.commons');
    const priceOptions = t('propertySearchResult.filter.price');
    const specificData = getEspecificData(t, propertyType);

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
                    <GroupContainer key={`filter-property-price`}>
                        <FilterBasicGroup 
                            title={priceOptions.title} 
                            dataGroup={getPriceData(priceOptions, propertyOperation)} />
                    </GroupContainer>
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

const mapStateToProps = state => ({
    propertyType: state.filter.propertyType,
    propertyOperation: state.filter.propertyOperation
})

export default connect(mapStateToProps)(FilterProperty);
