import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import AdvertiserSection from './advertiser-section/advertiser-section.component';
import FeatureSection from './feature-section/feature-section.component';
import LocationSection from './location-section/location-section.component';
import LoadImagesSection from './load-images-section/load-images-section.component';
import ReviewSection from './review-section/review-section.component';
import SavingSection from './saving-section/saving-section.component';

//Styles
import {
  PropertyFormContainer,
  HtmlForm
} from './property-form.styles';


const getFormSection = (formStep) => {
  switch (formStep) {
    case 0:
      return <AdvertiserSection/>
    case 1:
      return <FeatureSection/>
    case 2:
      return <LocationSection/>
    case 3:
      return <LoadImagesSection/>
    case 4:
      return <ReviewSection/>
    case 5:
      return <SavingSection/>
    default:
      return <AdvertiserSection/>
  }
}

const PropertyForm = ({formStep}) => {
  console.log(formStep)
  return (
    <PropertyFormContainer>
      <HtmlForm>
        {getFormSection(formStep)}
      </HtmlForm>
    </PropertyFormContainer>
  );
};

const mapStateToProps = state => ({
  properties: state.properties.data,
  formStep: state.propertyForm.formStep
})

export default connect(mapStateToProps, null)(PropertyForm);
