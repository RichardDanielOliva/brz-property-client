import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import useReactRouter from 'use-react-router';

import WithSpinner from '../with-spinner/with-spinner.component';
import PropertyForm from './property-form.component';


import { setEditProperty, setEmptyForm } from '../../redux/property-form/property-form.actions';
//Styles
import {
  PropertyFormContainer,
  HtmlForm
} from './property-form.styles';

const PropertyFormWithSpinner = WithSpinner(PropertyForm);

const PropertyFormWrapper = ({setEditProperty, isPropertieEdit, setEmptyForm}) => {
    const { location } = useReactRouter();

    let isLoading = false

    if(location.pathname === '/admin/property/create')
      setEmptyForm()
    else {
      isLoading = !isPropertieEdit
      let pathnameSplit = location.pathname.split("/")
      let propertyType = pathnameSplit[pathnameSplit.length - 2]
      let propertyId = pathnameSplit[pathnameSplit.length - 1]

      if(!isPropertieEdit || isPropertieEdit!== propertyId){
          setEditProperty(propertyType, propertyId)
      }
    }
    return (
        <PropertyFormContainer>
            <HtmlForm>
                <PropertyFormWithSpinner isLoading={isLoading}/>
            </HtmlForm>
        </PropertyFormContainer>
  );
};

const mapDispatchToProps = dispatch => ({
    setEditProperty: (propertyType, id) => 
        dispatch(setEditProperty(propertyType, id)),
    setEmptyForm:()=>
        dispatch(setEmptyForm())
});

const mapStateToProps = state => ({
  isPropertieEdit: state.propertyForm.isPropertieEdit
})

export default connect(mapStateToProps, mapDispatchToProps)(PropertyFormWrapper);