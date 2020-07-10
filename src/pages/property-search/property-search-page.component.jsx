import React from 'react';
import { connect } from 'react-redux';

import FilterProperty from '../../components/filter-components/filter-property.component';
import PropertySearchResult from '../../components/property-search-result/property-search-result.component';

import {fetchPropertiesStartAsync, setPropertySection} from '../../redux/property/property.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import {
    PropertySearchPageContainer,
    PropertySearchFilterContainer,
    PropertySearchResultContainer
  } from './property-search-page.styles';

const PropertySearchResultWithSpinner = WithSpinner(PropertySearchResult);

const PropertySearchPage = ({ isLoading, properties, section, fetchPropertiesStartAsync, setPropertySection, ...props }) => {
        if(!properties || section !== 'properties-search'){
            setPropertySection('properties-search');
            fetchPropertiesStartAsync();
            isLoading = true;
        }
        return (
            <PropertySearchPageContainer>
                <PropertySearchFilterContainer>
                    <FilterProperty/>
                </PropertySearchFilterContainer>
                <PropertySearchResultContainer>
                    <PropertySearchResultWithSpinner isLoading={isLoading} {...props}/>
                </PropertySearchResultContainer>
            </PropertySearchPageContainer>
        )
    }



const mapStateToProps = state => ({
    isLoading: state.properties.isFetching,
    properties: state.properties.data,
    section: state.properties.propertySection
})

const mapDispatchToProps = dispatch => ({
    fetchPropertiesStartAsync: () => 
        dispatch(fetchPropertiesStartAsync()),
    setPropertySection: (section) => 
        dispatch(setPropertySection(section))
    
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(PropertySearchPage);