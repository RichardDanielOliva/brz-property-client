import React from 'react';
//import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import CustomButton from '../commons/custom-button/custom-button.component';
import SelectProperty from './select-property/select-property.component';
import PropertyOperation from '../commons/property-operations/property-operation.component';
import LocationSearchInput from '../commons/location-search-input/location-search-input.component';

import {fetchPropertiesStartAsync} from '../../redux/property/property.actions';

import {
    HomeSearchContainer,
    OptionsContainer,
    SearchContainer,
    CustomSearchInputContainer,
    ButtonsContainer,
    ButtonText,
    IconLeft
  } from './home-search.styles';

const HomeSearch = ({fetchPropertiesStartAsync}) => {
    //const { t } = useTranslation();

    return (
        <HomeSearchContainer>
            <OptionsContainer>
                <PropertyOperation fetchProperties={false}/>
            </OptionsContainer>
            <SearchContainer>
                <SelectProperty/>
                <CustomSearchInputContainer>
                    <LocationSearchInput/>
                </CustomSearchInputContainer>
            </SearchContainer>
            <ButtonsContainer>
                <Link to="/search" onClick={() => fetchPropertiesStartAsync()}>
                    <CustomButton>
                        <ButtonText>Search</ButtonText>
                        <IconLeft className="fas fa-search fa-lg"/>
                    </CustomButton>
                </Link>
                <Link to="/search/map">
                    <CustomButton>
                        <ButtonText>Search by map</ButtonText>
                        <IconLeft className="fas fa-map-marked-alt fa-lg"/>
                    </CustomButton>
                </Link>
            </ButtonsContainer>
        </HomeSearchContainer>
    )
};

const mapDispatchToProps = dispatch => ({
    fetchPropertiesStartAsync: () => 
        dispatch(fetchPropertiesStartAsync())}
);

export default connect(null, mapDispatchToProps)(HomeSearch);