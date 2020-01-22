import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import CustomButton from '../commons/custom-button/custom-button.component';
import CustomSearchInput from '../commons/search-input/search-input.component';
import SelectProperty from './select-property/select-property.component';

import {
    HomeSearchContainer,
    OptionsContainer,
    SearchContainer,
    CustomSearchInputContainer,
    ButtonsContainer,
    Icon,
    IconLeft
  } from './home-search.styles';

import {handleOptionSelected} from '../../redux/main-search/main-search.actions'

const isSelected = (optionSelected, option) => {
    return optionSelected === option;
}

const HomeSearch = ({optionSelected, handleOptionSelected}) => {
    const { t } = useTranslation();
    const options = t('homePage.mainSearch.options');

    return (
        <HomeSearchContainer>
            <OptionsContainer>
                {options.map(({name, iconClass}) => {
                    return (<CustomButton 
                                isSelected={isSelected(optionSelected,name)}
                                onClick={()=> handleOptionSelected(name)}>
                                    <Icon className={iconClass}/>
                                    {name}
                            </CustomButton>)
                })}
            </OptionsContainer>
            <SearchContainer>
                <SelectProperty/>
                <CustomSearchInputContainer>
                    <CustomSearchInput
                        onChange={() => null}
                        className={false ? 'searching' : ''}
                        placeholder="Insert a location"/>
                </CustomSearchInputContainer>
            </SearchContainer>
            <ButtonsContainer>
                <CustomButton>
                    Search
                    <IconLeft className="fas fa-search fa-lg"/>
                </CustomButton>
                <CustomButton>
                    Search by map
                    <IconLeft className="fas fa-map-marked-alt fa-lg"/>
                </CustomButton>
            </ButtonsContainer>
        </HomeSearchContainer>
    )
};

const mapStateToProps = state => ({
    optionSelected: state.mainSearch.optionSelected,
});

const mapDispatchToProps = dispatch => ({
    handleOptionSelected: (name) => 
        dispatch(handleOptionSelected(name))}
);
  
export default connect(mapStateToProps, mapDispatchToProps)(HomeSearch);