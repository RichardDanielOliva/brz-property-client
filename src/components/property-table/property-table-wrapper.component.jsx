import React, { useState, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllPropertiesByType, setPropertySection } from '../../redux/property/property.actions';
import ErrorNoProperty from '../../pages/error/error-no-property.component';
import { deleteProperty } from '../../redux/property-form/property-form.actions';

import PropertyTable from './property-table.component';

import WithSpinner from '../with-spinner/with-spinner.component';

//Styles
import {
  PropertyTableContainer,
} from './property-table.styles';


const PropertyTableWithSpinner = WithSpinner(PropertyTable);

const PropertyTableWrapper = ({ isLoading,errorMessage, properties, section, propertyType, setPropertySection, fetchAllPropertiesByType, ...props }) => {
  const { t } = useTranslation();
  const { type: typeOptions } = t('propertyFilter');
  if(!properties || section !== 'properties-admin' && !errorMessage){
    setPropertySection('properties-admin')
    fetchAllPropertiesByType(propertyType);
    isLoading = true;
  }
  return (
    <PropertyTableContainer>
      <div class="row">
        <div class="form-group col-4">
          <Link 
            className="btn btn-primary btn-lg" role="button"
            to={'/admin/property/create'}>
              Create new
          </Link>
        </div>
        <div class="form-group col-4"></div>
        <div class="form-group col-4">
        <div class="row">
          <label>Property type: </label>
            <select 
              className="form-control form-control-sm"
              value={propertyType ? propertyType : ""}
              onChange={(event) => {
                fetchAllPropertiesByType(event.target.value)
              }}
              >
              {typeOptions.data.map(({title, value}) => {
                return (<option key={`filter-select-${value}`} className={`custom-select-option`} value={value}>
                                {title}
                </option> )
            })}
            </select>
          </div>
        </div>
      </div>
      {!errorMessage ? <PropertyTableWithSpinner 
        isLoading={isLoading} 
        {...props}/>: <ErrorNoProperty/>}
    </PropertyTableContainer>
  );
};


const mapStateToProps = state => ({
  isLoading: state.properties.isFetching,
  propertyType: state.filter.propertyType,
  properties: state.properties.data,
  errorMessage: state.properties.errorMessage,
  section: state.properties.propertySection
})

const mapDispatchToProps = dispatch => ({
    fetchAllPropertiesByType: (propertyTypeFilter) => 
      dispatch(fetchAllPropertiesByType(propertyTypeFilter)),
    setPropertySection: (section) => 
      dispatch(setPropertySection(section))
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(PropertyTableWrapper);
