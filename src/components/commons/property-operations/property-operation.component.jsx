import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';

import {
    PropertyOperationContainer,
    ButtonText,
    Icon,
  } from './property-operation.styles';

import {handleInputAttributte} from '../../../redux/filter/filter.actions';

const isSelected = (optionSelected, option) => {
    return optionSelected === option;
}

const PropertyOperation = ({optionSelected, handleInputAttributte}) => {
    const { t } = useTranslation();
    const operations = t('homePage.mainSearch.options');

    return (
        <PropertyOperationContainer>
                {operations.map(({name, reduxState, iconClass}) => {
                    return (<CustomButton 
                                isSelected={isSelected(optionSelected, name)}
                                onClick={()=> handleInputAttributte(name, reduxState)}>
                                    <Icon className={iconClass}/>
                                    <ButtonText>{name}</ButtonText>
                            </CustomButton>)
                })}
        </PropertyOperationContainer>
    )
};

const mapStateToProps = state => ({
    optionSelected: state.filter.propertyOperation,
});

const mapDispatchToProps = dispatch => ({
    handleInputAttributte: (value, name) => 
        dispatch(handleInputAttributte(value, name))}
);
  
export default connect(mapStateToProps, mapDispatchToProps)(PropertyOperation);