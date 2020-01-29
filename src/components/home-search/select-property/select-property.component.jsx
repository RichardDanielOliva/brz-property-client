import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import {getLogoComponent} from '../../../utils/LogoFactory';

import {
    SelectPropertyContainer,
    PropertySelect,
    PropertySelectText,
    PropertySelectDropDownMenu,
    PropertyOptions,
    PropertyOption,
    PropertyOptionText,
    Icon
  } from './select-property.styles';

import {displayPropertiesOptions} from '../../../redux/main-search/main-search.actions'
import {handleInputAttributte} from '../../../redux/filter/filter.actions';

const SelectProperty = ({propertySelected, showPropertiesOptions, displayPropertiesOptions, handleInputAttributte}) => {
    const { t } = useTranslation();
    const propertyOptions = t('homePage.propertyOptions');
    const dropLogo = "drop-down";

    return(
        <SelectPropertyContainer>
            <PropertySelect
                onClick={()=>displayPropertiesOptions()}>
                    <PropertySelectText>{propertySelected}</PropertySelectText>
                    <Icon className="fas fa-angle-down fa-lg"/>
                {/**<PropertySelectDropDownMenu>
                    {getLogoComponent(dropLogo)}
                </PropertySelectDropDownMenu>*/}
            </PropertySelect>
            <PropertyOptions isSelected={showPropertiesOptions}>
            {propertyOptions.map((name) => {
                    return (<PropertyOption 
                                onClick={()=> handleInputAttributte(name, "propertyType")}>
                                    <PropertyOptionText>{name}</PropertyOptionText>
                            </PropertyOption>)
                })}
            </PropertyOptions>
        </SelectPropertyContainer>
    )
}

const mapStateToProps = state => ({
    propertySelected: state.filter.propertyType,
    showPropertiesOptions: state.mainSearch.showPropertiesOptions
});

const mapDispatchToProps = dispatch => ({
    handleInputAttributte: (value, name) => {
        dispatch(handleInputAttributte(value, name));
        dispatch(displayPropertiesOptions())
    },
    displayPropertiesOptions: () =>
        dispatch(displayPropertiesOptions())
    }
);
  
export default connect(mapStateToProps, mapDispatchToProps)(SelectProperty);