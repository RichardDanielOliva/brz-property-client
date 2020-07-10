import React, { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { 
    setFormStep,
    selectFeatureType,
    setFeatureAttributte,
 } from '../../../redux/property-form/property-form.actions';

import {
    SectionContainer,
    SectionTitle,
    Input,
    ButtonText,
    FormOptions,
} from '../property-form.styles';

const FeatureSection = ({
    feature,
    selectedFeature,
    setFormStep,
    selectFeatureType,
    setFeatureAttributte
}) => {
    const { t } = useTranslation();
    const {
        type:typeOptions, 
        buildingAge: buildingAgeOptions,
        status: statusOptions,
        energyCertificate: energyCertificateOptions,
    } = t('propertyFilter');

    let {
        type: propertyTypeOptions, 
        extras: extraOptions,
    } = t(`propertyFilter.${selectedFeature.toLowerCase()}`);

    let [invalidPropertyType, setInvalidPropertyType] = useState(false)
    let [invalidSubPropertyType, setInvalidSubPropertyType] = useState(false)

    if(selectedFeature && selectedFeature !== '' && invalidPropertyType)
        setInvalidPropertyType(false)

    if(selectedFeature  && (feature.type || feature.type !== '') && invalidSubPropertyType)
        setInvalidSubPropertyType(false)

    return (
        <SectionContainer>
            <SectionTitle>Features</SectionTitle>
            <div class="row">
                <div class="form-group col-6">
                    <label for={"feature-property-type"}>*Property type</label>
                        <select 
                            id="feature-property-type" 
                            class="form-control"
                            onChange={ e => selectFeatureType(e.target.value) }
                            >
                            <option value={''} selected>Choose...</option> 
                            {typeOptions.data.map(({title, value}) =>
                            {
                                if (selectedFeature === value)
                                    return <option value={value} selected>{title}</option> 
                                else
                                    return <option value={value}>{title}</option> 
                            }
                            )}
                    </select>
                    {invalidPropertyType && 
                        <div class="alert alert-danger" role="alert">
                            {invalidPropertyType}
                        </div>
                    }
                </div>
                {selectedFeature && ( selectedFeature !== 'OFFICE') &&
                    <div class="form-group col-6">
                        <label for={"feature-property-type"}>*{propertyTypeOptions.name}</label>
                        <select 
                            id="feature-property-type" 
                            class="form-control"
                            onChange={ e => setFeatureAttributte('type', e.target.value) }
                            >
                            {feature.type ? 
                                <option value={''}>Choose...</option>: 
                                <option value={''} selected>Choose...</option>
                            }
                                {propertyTypeOptions.data.map(({title, value}) =>
                                {
                                    if (feature.type === value)
                                        return <option value={value} selected>{title}</option> 
                                    else
                                        return <option value={value}>{title}</option> 
                                    
                                }
                            )}
                         </select>
                        {invalidSubPropertyType && 
                        <div class="alert alert-danger" role="alert">
                            {invalidSubPropertyType}
                        </div>
                        }
                    </div>
                }
            </div>
            {selectedFeature &&
            <Fragment>
            <div class="row">
                <div class={`form-group col-${selectedFeature === 'HOME' ? "4" : "6"}`}>
                    <label for={"feature-status"}>State</label>
                    <select 
                            id="feature-status" 
                            class="form-control"
                            onChange={ e => setFeatureAttributte('status', e.target.value) }
                            >
                            <option value={''} selected>Choose...</option>
                            { statusOptions.data.map(({title, value}) =>
                                {
                                    if (feature.status === value)
                                        return <option value={value} selected>{title}</option> 
                                    else
                                        return <option value={value}>{title}</option> 
                                }
                            )}
                    </select>
                </div>
                <div class={`form-group col-${selectedFeature === 'HOME' ? "4" : "6"}`}>
                    <label for={"feature-baths"}>Baths</label>
                    <Input 
                        id="feature-baths" 
                        type="number" 
                        placeholder='Baths' 
                        value={feature.baths}
                        onChange={ e => setFeatureAttributte('baths', e.target.value)}
                        />
                </div>
                {selectedFeature === 'HOME' && 
                    <div class="form-group col-4">
                        <label for={"feature-rooms"}>Rooms</label>
                        <Input 
                            id="feature-rooms" 
                            type="number" 
                            placeholder='Rooms' 
                            value={feature.rooms}
                            onChange={ e => setFeatureAttributte('rooms', e.target.value)}
                        />
                    </div>
                }
            </div>
            <div class="row">
                <div class="form-group col-4">
                    <label for={"feature-area"}>Area</label>
                    <Input 
                        id="feature-area" 
                        type="number" 
                        placeholder='Area' 
                        value={feature.area}
                        onChange={ e => setFeatureAttributte('area', e.target.value)}
                        />
                </div>
                <div class="form-group col-4">
                    <label for={"feature-buildingArea"}>Building Area</label>
                    <Input 
                        id="feature-buildingArea" 
                        type="number" 
                        placeholder='Building Area' 
                        value={feature.buildingArea}
                        onChange={ e => setFeatureAttributte('buildingArea', e.target.value)}
                        />
                </div>
                <div class="form-group col-4">
                    <label for={"feature-buildingAge"}>Building Age</label>
                        <select 
                            id="feature-buildingAge" 
                            class="form-control"
                            onChange={ e => setFeatureAttributte('buildingAge', e.target.value) }
                            >
                            <option value={''} selected>Choose...</option>
                            { buildingAgeOptions.data.map(({title, value}) =>
                                {
                                    if (feature.buildingAge === value)
                                        return <option value={value} selected>{title}</option> 
                                    else
                                        return <option value={value}>{title}</option> 
                                }
                            )}
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-6">
                        <label for={"feature-property-type"}>{extraOptions.name}</label>
                        <select 
                            multiple
                            id="feature-property-type" 
                            class="form-control"
                            onChange={ e => {
                                let selectedValue = []
                                for (let i=0; i<e.target.options.length; i++) {
                                    if (e.target.options[i].selected) 
                                        selectedValue.push(e.target.options[i].value || e.target.options[i].text);
                                  }
                                console.log(selectedValue)
                                setFeatureAttributte('extras', selectedValue) }
                            }
                            >
                                {feature.extras ? 
                                    <option value={''}>Choose...</option>: 
                                    <option value={''} selected>Choose...</option>
                                }
                                {extraOptions.data.map(({title, value}) => {
                                    if (feature.extras && feature.extras.includes(value))
                                        return <option value={value} selected>{title}</option> 
                                    else
                                        return <option value={value}>{title}</option> 
                                }
                            )}
                         </select>
                </div>
                <div class="form-group col-6">
                        <label for={"feature-property-type"}>{energyCertificateOptions.name}</label>
                        <select 
                            id="feature-property-type" 
                            class="form-control"
                            onChange={ e => setFeatureAttributte('energyCertificate', e.target.value) }
                            >
                                <option value={''} selected>Choose...</option>
                                {energyCertificateOptions.data.map(({title, value}) =>{
                                    if (feature.energyCertificate === value)
                                        return <option value={value} selected>{title}</option> 
                                    else
                                        return <option value={value}>{title}</option> 
                                }
                            )}
                         </select>
                </div>                
            </div>
            </Fragment>
            }
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
                        let isValidForm = true

                        if(!selectedFeature && selectedFeature === ''){
                            setInvalidPropertyType("Please select one property")
                            isValidForm = false
                        }else
                            setInvalidPropertyType('')  

                        if(!selectedFeature && selectedFeature !== 'OFFICE' && (!feature.type || feature.type === '')){
                            setInvalidSubPropertyType("Please select one")
                            isValidForm = false
                        }else
                            setInvalidSubPropertyType('')

                        if(isValidForm)
                            setFormStep(2)}
                    }
                    class="btn btn-primary">
                    <ButtonText>Next step</ButtonText>
                </button>
            </FormOptions>
        </SectionContainer>
      )
}

const mapStateToProps = state => ({
    feature: state.propertyForm.feature,
    selectedFeature: state.propertyForm.selectedFeature
})

const mapDispatchToProps = dispatch => ({
    setFormStep: (attributte) => 
        dispatch(setFormStep(attributte)),
    selectFeatureType: (selectedFeature) => 
        dispatch(selectFeatureType(selectedFeature)),
    setFeatureAttributte: (attributte, value) => 
        dispatch(setFeatureAttributte(attributte, value)), 
});
  
export default connect(mapStateToProps, mapDispatchToProps)(FeatureSection);