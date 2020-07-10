import React, { Fragment, useState, useEffect, useRef  } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { setEmptyForm } from '../../../redux/property-form/property-form.actions';

import Spinner from '../../spinner/spinner.component';

import {
    SectionContainer,
    SectionTitle
} from '../property-form.styles';


const SavingSection = ({
    savePropertyStart,
    saveImageSuccess,
    saveImageFailure,
    savePropertySuccess,
    savePropertyFailure,
    setEmptyForm
}) => {
    return (
        <SectionContainer>
            <SectionTitle>Saving property</SectionTitle>
                {savePropertyStart && 
                <div class="row">
                    {!(savePropertySuccess || saveImageFailure || savePropertyFailure) &&
                    <div class="form-group col-12">
                        <Spinner height={'35vh'}/>
                    </div>}
                    <div class="form-group col-12">
                    {saveImageSuccess ? "Images saved success" : `${!saveImageFailure ? "Saving Images" : ""}`}
                    {saveImageFailure ? `Error saving images : ${saveImageFailure}` : ""}
                    </div>
                    <div class="form-group col-12">
                    {saveImageSuccess && !savePropertySuccess ? "Saving property data" : ""}
                    {savePropertyFailure ? `Error saving property : ${savePropertyFailure}` : ""}
                    </div>
                    {(savePropertySuccess || saveImageFailure || savePropertyFailure) ?
                    <div class="form-group col-12">
                        <div class="form-group col-12">
                            {`Property save success - ID: ${savePropertySuccess.id}`}
                        </div>
                        <Link to='/admin/property' onClick={()=> setEmptyForm()} class="btn btn-primary btn-lg mb-2" role="button">Go to Properties</Link>
                    </div> : null}
                </div>}
        </SectionContainer>
      )
}

const mapStateToProps = state => ({
    savePropertyStart: state.propertyForm.savePropertyStart,
    saveImageSuccess: state.propertyForm.saveImageSuccess,
    savePropertySuccess: state.propertyForm.savePropertySuccess,
    saveImageFailure: state.propertyForm.saveImageFailure,
    savePropertyFailure: state.propertyForm.savePropertyFailure,
})


const mapDispatchToProps = dispatch => ({
    setEmptyForm:()=>
        dispatch(setEmptyForm())
});

export default connect(mapStateToProps, mapDispatchToProps)(SavingSection);