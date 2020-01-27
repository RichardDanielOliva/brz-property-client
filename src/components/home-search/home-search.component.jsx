import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import {Link, withRouter} from 'react-router-dom';

import CustomButton from '../commons/custom-button/custom-button.component';
import CustomSearchInput from '../commons/search-input/search-input.component';
import SelectProperty from './select-property/select-property.component';
import PropertyOperation from '../commons/property-operations/property-operation.component'


import {
    HomeSearchContainer,
    OptionsContainer,
    SearchContainer,
    CustomSearchInputContainer,
    ButtonsContainer,
    Icon,
    IconLeft
  } from './home-search.styles';

import {handleInputAttributte} from '../../redux/filter/filter.actions';

const isSelected = (optionSelected, option) => {
    return optionSelected === option;
}

const HomeSearch = ({optionSelected, handleInputAttributte}) => {
    const { t } = useTranslation();
    const options = t('homePage.mainSearch.options');

    return (
        <HomeSearchContainer>
            <OptionsContainer>
                {/**options.map(({name,reduxState, iconClass}) => {
                    console.log(reduxState)
                    return (<CustomButton 
                                isSelected={isSelected(optionSelected, name)}
                                onClick={()=> handleInputAttributte(name, reduxState)}>
                                    <Icon className={iconClass}/>
                                    {name}
                            </CustomButton>)
                })*/}
                <PropertyOperation/>
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
                <Link to="/search">
                    <CustomButton>
                        Search
                        <IconLeft className="fas fa-search fa-lg"/>
                    </CustomButton>
                </Link>
                <Link to="/search/map">
                    <CustomButton>
                        Search by map
                        <IconLeft className="fas fa-map-marked-alt fa-lg"/>
                    </CustomButton>
                </Link>
            </ButtonsContainer>
        </HomeSearchContainer>
    )
};

const mapStateToProps = state => ({
    optionSelected: state.filter.propertyOperation,
});

const mapDispatchToProps = dispatch => ({
    handleInputAttributte: (value, name) => 
        dispatch(handleInputAttributte(value, name))}
);
  
export default connect(mapStateToProps, mapDispatchToProps)(HomeSearch);