import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import FilterProperty from '../../components/filter-components/filter-property.component';

import {
    PropertySearchPageContainer,
  } from './property-search-page.styles';

const PropertySearchPage = ({title, groups, ...props}) => {
    return (
        <PropertySearchPageContainer>
            <aside className="property-search-filter-container">
                <FilterProperty/>
            </aside>
        </PropertySearchPageContainer>
    )
}

export default PropertySearchPage;