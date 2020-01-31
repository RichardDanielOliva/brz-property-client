import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import FilterProperty from '../../components/filter-components/filter-property.component';
import PropertySearchResult from '../../components/property-search-result/property-search-result.component';


import { selectFilterResume} from '../../redux/filter/filter.selectors';
import {fetchPropertiesStartAsync} from '../../redux/property/property.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import {
    PropertySearchPageContainer,
    PropertySearchFilterContainer,
    PropertySearchResultContainer
  } from './property-search-page.styles';

const PropertySearchResultWithSpinner = WithSpinner(PropertySearchResult);

class PropertySearchPage extends React.Component { 
    componentDidMount(){
        const { fetchPropertiesStartAsync, filterState} = this.props;
        fetchPropertiesStartAsync(filterState);
    }

    render() {
        const { isLoading, ...props } = this.props;
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

}

const mapStateToProps = state => ({
    isLoading: state.properties.isFetching,
    filterState: selectFilterResume(state)
})

const mapDispatchToProps = dispatch => ({
    fetchPropertiesStartAsync: (filterState) => 
        dispatch(fetchPropertiesStartAsync(filterState))}
);

export default connect(mapStateToProps, mapDispatchToProps)(PropertySearchPage);