import React, { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SlideShowImages from '../../slideshow-images/slideshow-images.component';
import { connect } from 'react-redux';
import { 
    setFormStep,
    saveProperty,
 } from '../../../redux/property-form/property-form.actions';

import {
    SectionContainer,
    SlideShowContainer,
    SectionTitle,
    Input,
    ButtonText,
    FormOptions,
} from '../property-form.styles';


const ReviewSection = ({
    advertiser,
    selectedFeature,
    feature,
    location,
    coordinates,
    images,
    imagesSaved,
    setFormStep,
    saveProperty
}) => {

    const { t } = useTranslation();
    const commonsOptions = t('propertyFilter.operation');

    return (
        <SectionContainer>
            <h2>Review</h2>
            <div class="row">
                <div class="form-group col-4">
                    <SectionTitle>Advertiser</SectionTitle>
                    <div>
                        <strong>{`Operation: `}</strong>
                        {advertiser.operation}
                    </div>
                    <div>
                        <strong>{`Price: `}</strong>
                        {advertiser.price}
                    </div>
                    <div>
                        <strong>{`Publish date: `}</strong>
                        {advertiser.publishDate}
                    </div>
                    <div>
                        <strong>{`Telephones: `}</strong>
                        {advertiser.userContact.phones.map(phone=>`${phone} `)}
                    </div>
                    <div>
                        <strong>{`Emails: `}</strong>
                        {advertiser.userContact.emails.map(email=>`${email} `)}
                    </div>
                </div>
                <div class="form-group col-4">
                    <SectionTitle>Features</SectionTitle>
                    <div>
                        <strong>{`Property type: `}</strong>
                        {selectedFeature}
                    </div>
                    {selectedFeature != 'OFFICE' &&
                        <div>
                            <strong>{`${selectedFeature} type: `}</strong>
                            {feature.type}
                        </div>
                    }
                    <div>
                        <strong>{`State: `}</strong>
                        {feature.status}
                    </div>
                    {selectedFeature == 'HOME' &&
                        <div>
                            <strong>{`Rooms: `}</strong>
                            {feature.rooms}
                        </div>
                    }
                    <div>
                        <strong>{`Baths: `}</strong>
                        {feature.baths}
                    </div>
                    <div>
                        <strong>{`Area: `}</strong>
                        {feature.area}
                    </div>
                    <div>
                        <strong>{`Building Area: `}</strong>
                        {feature.buildingArea}
                    </div>
                    <div>
                        <strong>{`Building Age: `}</strong>
                        {feature.buildingAge}
                    </div>
                    <div>
                        <strong>{`Energy Certificate: `}</strong>
                        {feature.energyCertificate}
                    </div>
                    <div>
                        <strong>{`Extras: `}</strong>
                        {feature.extras && feature.extras.map(extra=>`${extra} `)}
                    </div>
                </div>
                <div class="form-group col-4">
                    <SectionTitle>Location</SectionTitle>
                    <div>
                        <strong>{`Country: `}</strong>
                        {location.country}
                    </div>
                    <div>
                        <strong>{`State: `}</strong>
                        {location.state}
                    </div>
                    <div>
                        <strong>{`City: `}</strong>
                        {location.city}
                    </div>
                    <div>
                        <strong>{`Addressed: `}</strong>
                        {location.addressed}
                    </div>
                    <div>
                        <strong>{`Postal code: `}</strong>
                        {location.postalCode}
                    </div>
                    <div>
                        <strong>{`Longitude: `}</strong>
                        {coordinates? coordinates[1] : ""}
                    </div>
                    <div>
                        <strong>{`Latitude: `}</strong>
                        {coordinates? coordinates[0] : ""}
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-12">
                        <div>
                            {images && Boolean(images.length) && (
                            <SlideShowContainer > 
                                <SectionTitle>Images to save</SectionTitle>
                                <SlideShowImages images={images} />
                            </SlideShowContainer>
                            )}
                        </div>
                </div>
                <div class="form-group col-12">
                        <div>
                            {imagesSaved && Boolean(imagesSaved.length) && (
                            <SlideShowContainer > 
                                <SectionTitle>Images saved</SectionTitle>
                                <SlideShowImages images={imagesSaved} />
                            </SlideShowContainer>
                            )}
                        </div>
                </div>
            </div>

            <FormOptions>
            <button 
                class="btn btn-primary"
                onClick={(event) => {
                        event.preventDefault();
                        setFormStep(3)}
                    }>
                    <ButtonText>Previus step</ButtonText>
                </button>
                <button 
                    onClick={(event) => {
                        event.preventDefault();
                        saveProperty()
                        setFormStep(5)
                    }
                    }
                    class="btn btn-primary">
                    <ButtonText>Save</ButtonText>
                </button>
            </FormOptions>
        </SectionContainer>
      )
}

const mapStateToProps = state => ({
    advertiser: state.propertyForm.advertiser,
    selectedFeature: state.propertyForm.selectedFeature,
    feature: state.propertyForm.feature,
    location: state.propertyForm.location,
    coordinates: state.propertyForm.coordinates,
    images: state.propertyForm.auxImagesFilesPreview,
    imagesSaved: state.propertyForm.imagesSaved,
    formStep: state.propertyForm.formStep
})

const mapDispatchToProps = dispatch => ({
    setFormStep: (attributte) => 
        dispatch(setFormStep(attributte)),
    saveProperty: () =>
        dispatch(saveProperty()),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(ReviewSection);