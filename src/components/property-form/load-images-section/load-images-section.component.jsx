import React, { Fragment, useState, useEffect, useRef  } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import SlideShowImages from '../../slideshow-images/slideshow-images.component';

import { 
    setFormStep,
    setImages
 } from '../../../redux/property-form/property-form.actions';

import {
    SectionContainer,
    SectionTitle,
    Input,
    ButtonText,
    FormOptions,
    SlideShowContainer
} from '../property-form.styles';


const LoadImagesSection = ({
    imagesSaved,
    setFormStep,
    setImages}) => {

    const { t } = useTranslation();
    const commonsOptions = t('propertyFilter.operation');
    const [value, setValue] = useState([])
    const [images, setImagesfiles] = useState([])
    const [imagesPreview, setImagesPreview] = useState([])
    const [auxImagePreview, setAuxImagePreview] = useState(false)
    const [invalidImage, setInvalidImage] = useState(false)
    const [auxImageSaved, setAuxImageSaved] = useState(imagesSaved)
    const inputRef = useRef();

    useEffect(() => {
        value.forEach(file => {
            if(file.type === 'image/png' || file.type === 'image/jpeg'){
                let reader = new FileReader();

                reader.onload = function (e) {
                    setAuxImagePreview([e.target.result, file])
                }
        
                reader.readAsDataURL(file);
                setInvalidImage("")
            }else
                setInvalidImage("File type accepted: .png or .jpg")
        })
    }, [value]);

    useEffect(() => {
        if(auxImagePreview && !imagesPreview.includes(auxImagePreview[0])){
            setImagesPreview([...imagesPreview, auxImagePreview[0]])
            setImagesfiles([...images, auxImagePreview[1]])
            setAuxImagePreview(false)
        }
    }, [auxImagePreview]);

    return (
        <SectionContainer>
            {imagesSaved && Boolean(auxImageSaved.length) &&
            <Fragment>
                <SectionTitle>Actual saved Images</SectionTitle>
                    <div class="row">
                        <div class="form-group col-12">
                            <div>
                                <SlideShowContainer>
                                    <SlideShowImages images={auxImageSaved} setImagesPreview={setAuxImageSaved}/>
                                </SlideShowContainer>
                            </div>
                    </div>
                </div> 
            </Fragment>}
            <SectionTitle>Load Images</SectionTitle>
                <div class="row">
                    <div class="form-group col-12">
                        <div>
                            {Boolean(imagesPreview.length) && (
                            <SlideShowContainer >Selected files: 
                                <SlideShowImages images={imagesPreview} setImagesPreview={setImagesPreview}/>
                            </SlideShowContainer>
                            )}
                            <label>
                            Select some files...
                            <input
                                type="file"
                                onChange={e => {
                                    setValue([...value, ...e.target.files])
                                }}
                                multiple
                                ref={inputRef}
                            />
                            </label>
                        </div>
                    {invalidImage && 
                        <div class="alert alert-danger" role="alert">
                            {invalidImage}
                        </div>
                    }
                </div>
            </div>
            <FormOptions>
            <button 
                class="btn btn-primary"
                onClick={(event) => {
                        event.preventDefault();
                        setFormStep(2)}
                    }>
                    <ButtonText>Previus step</ButtonText>
                </button>
                <button 
                    onClick={(event) => {
                        event.preventDefault();
                        setImages(images, auxImageSaved, imagesPreview)
                        setFormStep(4)
                    }
                    }
                    class="btn btn-primary">
                    <ButtonText>Review before save</ButtonText>
                </button>
            </FormOptions>
        </SectionContainer>
      )
}

const mapStateToProps = state => ({
    imagesSaved: state.propertyForm.imagesSaved
})

const mapDispatchToProps = dispatch => ({
    setImages: (images, imagesPreview, auxImagePreview) => 
        dispatch(setImages(images, imagesPreview, auxImagePreview)), 
    setFormStep: (attributte) => 
        dispatch(setFormStep(attributte)),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(LoadImagesSection);