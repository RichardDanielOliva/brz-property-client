import React from 'react';
import { useTranslation } from 'react-i18next';
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
    const { t } = useTranslation();
    const searchButtons = t('homePage.searchButtons');

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
                <Link to={searchButtons[0].link} 
                    style={{ width: '33%', height: '100%' }}
                    onClick={() => fetchPropertiesStartAsync()}>
                    <CustomButton>
                        <ButtonText>{searchButtons[0].text}</ButtonText>
                        <IconLeft className="fas fa-search fa-lg"/>
                    </CustomButton>
                </Link>
                <Link to={searchButtons[1].link} 
                    style={{ width: '33%', height: '100%' }}>
                    <CustomButton>
                        <ButtonText>{searchButtons[1].text}</ButtonText>
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