import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import FilterProperty from '../../components/filter-components/filter-property.component';
import PropertySearchResult from '../../components/property-search-result/property-search-result.component';

import {
    PropertySearchPageContainer,
    PropertySearchFilterContainer,
    PropertySearchResultContainer
  } from './property-search-page.styles';

const PropertySearchPage = ({title, groups, ...props}) => {
    return (
        <PropertySearchPageContainer>
            <PropertySearchFilterContainer>
                <FilterProperty/>
            </PropertySearchFilterContainer>
            <PropertySearchResultContainer>
                <PropertySearchResult/>
            </PropertySearchResultContainer>
        </PropertySearchPageContainer>
    )
}

export default PropertySearchPage;