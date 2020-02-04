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
                {operations.map(({name, value, reduxState, iconClass}) => {
                    return (<CustomButton key={`custom-button-${value}`}
                                isSelected={isSelected(optionSelected, value)}
                                onClick={() => handleInputAttributte(value, reduxState)}>
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