import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import PSRSortedGroup from './psr-sorted-group/psr-sorted-group.component';
import PropertyCardList from '../property-card-list/property-card-list.component';

import { PropertySearchResultContainer, PSR_HeaderContainer } from './property-search-result.styles';

const PropertySearchResult = () => {
    return (
        <PropertySearchResultContainer>
            <PSR_HeaderContainer>
                <PSRSortedGroup/>
                <div className="property-search-result-header-view-container">
                    <button>
                        Map
                        <i className="fas fa-angle-double-right fa-lg"></i>
                    </button>
                </div>
            </PSR_HeaderContainer>
            <div className="property-search-result-body-container">
                <PropertyCardList/>
            </div>
        </PropertySearchResultContainer>
    )
}

export default PropertySearchResult;