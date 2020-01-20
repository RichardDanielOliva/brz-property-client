import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import FilterProperty from '../../components/filter-components/filter-property.component';

import './property-search.styles.scss';

const PropertySearchPage = ({title, groups, ...props}) => {
    return (
        <div className="property-search-container">
            <aside className="property-search-filter-container">
                <FilterProperty/>
            </aside>
        </div>
    )
}

export default PropertySearchPage;