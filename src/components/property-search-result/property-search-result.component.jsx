import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import PSRSortedGroup from './psr-sorted-group/psr-sorted-group.component';
import PropertyCardList from '../property-card-list/property-card-list.component';
import PropertyOperation from '../commons/property-operations/property-operation.component'
import CustomButton from '../commons/custom-button/custom-button.component';


import { 
    PropertySearchResultContainer, 
    PSR_HeaderContainer,
    Icon } from './property-search-result.styles';

const PropertySearchResult = () => {
    return (
        <PropertySearchResultContainer>
            <PSR_HeaderContainer>
                <PropertyOperation/>
                {/**<PSRSortedGroup/>*/}
                <div className="property-search-result-header-view-container">
                    <CustomButton>
                        <Icon className="fas fa-map-marked-alt fa-lg"/>
                        Map
                    </CustomButton>
                </div>
            </PSR_HeaderContainer>
            <div className="property-search-result-body-container">
                <PropertyCardList/>
            </div>
        </PropertySearchResultContainer>
    )
}

export default PropertySearchResult;