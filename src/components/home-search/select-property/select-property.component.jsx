import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import {getLogoComponent} from '../../../utils/LogoFactory';

import {
    SelectPropertyContainer,
    PropertySelect,
    PropertySelectTitle,
    PropertySelectDropDownMenu,
    PropertyOptions,
    PropertyOption
  } from './select-property.styles';

import {handlePropertySelected, displayPropertiesOptions} from '../../../redux/main-search/main-search.actions'

const SelectProperty = ({propertySelected, showPropertiesOptions, displayPropertiesOptions, handlePropertySelected}) => {
    const { t } = useTranslation();
    const propertyOptions = t('homePage.propertyOptions');
    const dropLogo = "drop-down";

    return(
        <SelectPropertyContainer>
            <PropertySelect
                onClick={()=>displayPropertiesOptions()}>
                <PropertySelectTitle>
                    {propertySelected}
                </PropertySelectTitle>
                <PropertySelectDropDownMenu>
                    {getLogoComponent(dropLogo)}
                </PropertySelectDropDownMenu>
            </PropertySelect>
            <PropertyOptions isSelected={showPropertiesOptions}>
            {propertyOptions.map((name) => {
                    return (<PropertyOption 
                                onClick={()=> handlePropertySelected(name)}>
                                    {name}
                            </PropertyOption>)
                })}
            </PropertyOptions>
        </SelectPropertyContainer>
    )
}

const mapStateToProps = state => ({
    propertySelected: state.mainSearch.propertyTypeSelected,
    showPropertiesOptions: state.mainSearch.showPropertiesOptions
});

const mapDispatchToProps = dispatch => ({
    handlePropertySelected: (name) => 
        dispatch(handlePropertySelected(name)),
    displayPropertiesOptions: () =>
        dispatch(displayPropertiesOptions())
    }
);
  
export default connect(mapStateToProps, mapDispatchToProps)(SelectProperty);