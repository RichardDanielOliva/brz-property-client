import React, { Fragment, useState, useEffect, useRef  } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import SlideShowImages from '../../slideshow-images/slideshow-images.component';

import { 
    setFormStep,
    setAdvertiserAttributte, 
    setAdvertiserUserContactAttributte,
    addAdvertiserUserContactAttributte
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
    setFormStep,
    setAdvertiserAttributte}) => {

    const { t } = useTranslation();
    const commonsOptions = t('propertyFilter.operation');
    const [validOperation, setValidOperation] = useState(false)
    const [value, setValue] = useState([])
    const [imagesPreview, setImagesPreview] = useState([])
    const [auxImagePreview, setAuxImagePreview] = useState(false)
    const inputRef = useRef();

    useEffect(() => {
        value.forEach(file => {
            let reader = new FileReader();

            reader.onload = function (e) {
                setAuxImagePreview(e.target.result)
            }
    
            reader.readAsDataURL(file);
        })
    }, [value]);

    useEffect(() => {
        if(auxImagePreview){
            setImagesPreview([...imagesPreview, auxImagePreview])
            setAuxImagePreview(false)
        }
    }, [auxImagePreview]);

    return (
        <SectionContainer>
            <SectionTitle>Load Images</SectionTitle>
                <div class="row">
                    <div class="form-group col-12">
                        <div>
                            {Boolean(imagesPreview.length) && (
                            <SlideShowContainer >Selected files: 
                                <SlideShowImages images={imagesPreview}/>
                            </SlideShowContainer>
                            )}
                            <label>
                            Select some files...
                            <input
                                type="file"
                                onChange={e => {
                                    console.log(e.target.files)
                                    setValue([...value, ...e.target.files])
                                }}
                                multiple
                                ref={inputRef}
                            />
                            </label>
                        </div>
                    {validOperation && 
                        <div class="alert alert-danger" role="alert">
                            {validOperation}
                        </div>
                    }
                </div>
            </div>
            <FormOptions>
            <button 
                class="btn btn-primary"
                onClick={(event) => {
                        event.preventDefault();
                        setFormStep(0)}
                    }>
                    <ButtonText>Previus step</ButtonText>
                </button>
                <button 
                    onClick={(event) => {
                        event.preventDefault();
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
    advertiser: state.propertyForm.advertiser
})

//const mapDispatchToProps = dispatch => ({
//    setAdvertiserAttributte: (attributte, value) => 
//        dispatch(setAdvertiserAttributte(attributte, value)), 
//});
  
export default connect(mapStateToProps, null)(LoadImagesSection);