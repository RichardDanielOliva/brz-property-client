import React, { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
} from '../property-form.styles';


const AdvertiserSection = ({
    setFormStep,
    advertiser, 
    setAdvertiserAttributte, 
    setAdvertiserUserContactAttributte, 
    addAdvertiserUserContactAttributte}) => {

    const { t } = useTranslation();
    const commonsOptions = t('propertyFilter.operation');

    let [invalidOperation, setInvalidOperation] = useState(false)
    let [invalidPrice, setInvalidPrice] = useState(false)
    let [invalidContactInfo, setInvalidContactInfo] = useState(false)

    if (advertiser.operation && !advertiser.operation == '' && invalidOperation)
        setInvalidOperation('')

    if((advertiser.userContact.phones >= 1 || advertiser.userContact.emails >= 1) && invalidContactInfo)
        setInvalidContactInfo('')

    return (
        <SectionContainer>
            <SectionTitle>Advertiser</SectionTitle>
            <div class="row">
                <div class="form-group col-6">
                    <label for={"advertiser-operation"}>*Operation</label>
                    <select 
                        id="advertiser-operation" 
                        class="form-control"
                        onChange={ e => setAdvertiserAttributte('operation', e.target.value) }>
                        {advertiser.operation ? 
                            <option value={''} selected>Choose...</option> :
                            <option value={''} >Choose...</option>
                        }
                        {commonsOptions.data.map(({title, value}) => {
                            if (advertiser.operation === value)
                                return <option value={value} selected>{title}</option> 
                            else
                                return <option value={value}>{title}</option> 
                        })}
                    </select>
                    {invalidOperation && 
                        <div class="alert alert-danger" role="alert">
                            {invalidOperation}
                        </div>
                    }
                </div>
                <div class="form-group col-6">
                    <label for={"advertiser-price"}>Price</label>
                    <Input 
                        id="advertiser-price" 
                        type="number" 
                        placeholder='Price' 
                        value={advertiser.price}
                        onChange={ e => setAdvertiserAttributte('price', e.target.value)}
                        />
                    {invalidPrice && 
                        <div class="alert alert-danger" role="alert">
                            {invalidPrice}
                        </div>}
                </div>
            </div>
            <div class="row">
                <div class="form-group col-6">
                    <label for={"advertiser-publishDate"}>Publish date</label>
                    <Input 
                        id="advertiser-publishDate" 
                        type="date" 
                        placeholder='Publish date' 
                        value={advertiser.publishDate}
                        onChange={ e => setAdvertiserAttributte('publishDate', e.target.value)}
                        />
                </div>
                <div class="form-group col-6">
                    <div class="form-group">
                    <label for={"advertiser-phones"}>*Telephone</label>
                        {advertiser.userContact.phones.map((phones, idx) =>
                            <Fragment>
                                <Input 
                                    id={`advertiser-phones-${idx}`} 
                                    type="phones" 
                                    placeholder='Phone'
                                    value={phones}
                                    onChange={ e => setAdvertiserUserContactAttributte('phones',idx, e.target.value)} />
                            </Fragment> 
                        )}
                    {invalidContactInfo && 
                        <div class="alert alert-danger" role="alert">
                            {invalidContactInfo}
                        </div>}
                    <button class="btn btn-primary mb-2" 
                        onClick={(event) => {
                            event.preventDefault()
                            addAdvertiserUserContactAttributte('phones')
                        }}
                        >Add Other
                    </button>
                    </div>
                    <div class="form-group">
                        <label for={"advertiser-email"}>*Email</label>
                        {advertiser.userContact.emails.map((email, idx) => 
                            <Input 
                                id={`advertiser-email-${idx}`} 
                                type="email" 
                                placeholder='Email'
                                value={email}
                                onChange={e => setAdvertiserUserContactAttributte('emails', idx, e.target.value)} />
                        )}
                        <button 
                            onClick={(event) => {
                                event.preventDefault()
                                addAdvertiserUserContactAttributte('emails')
                            }}
                            class="btn btn-primary mb-2">Add Other</button>
                    </div>
                </div>
            </div>
            <FormOptions>
                <Link class="btn btn-primary" to={`/admin/property/`}>
                    <ButtonText>Cancel</ButtonText>
                </Link>
                <button 
                    onClick={(event) => {
                        event.preventDefault();
                        let isValidForm = true

                        if(!advertiser.operation && advertiser.operation == ''){
                            setInvalidOperation("Please select one operation")
                            isValidForm = false
                        }else
                            setInvalidOperation('')  

                        if(advertiser.price && isNaN(advertiser.price)){
                            setInvalidPrice("Please insert a valid price")
                            isValidForm = false
                        }else
                            setInvalidPrice('')  
                        
                        if(advertiser.userContact.phones <= 1 && advertiser.userContact.emails <=1 ){
                            setInvalidContactInfo("Please insert at least one phone or email")
                            isValidForm = false
                        }else
                            setInvalidContactInfo('')  

                        if(isValidForm)
                            setFormStep(1)}
                    }
                    class="btn btn-primary">
                    <ButtonText>Next step</ButtonText>
                </button>
            </FormOptions>
        </SectionContainer>
      )
}

const mapStateToProps = state => ({
    advertiser: state.propertyForm.advertiser
})

const mapDispatchToProps = dispatch => ({
    setAdvertiserAttributte: (attributte, value) => 
        dispatch(setAdvertiserAttributte(attributte, value)), 
    setAdvertiserUserContactAttributte: (attributte, idx, value) => 
        dispatch(setAdvertiserUserContactAttributte(attributte, idx, value)),
    addAdvertiserUserContactAttributte: (attributte) => 
        dispatch(addAdvertiserUserContactAttributte(attributte)),
    setFormStep: (attributte) => 
        dispatch(setFormStep(attributte)),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(AdvertiserSection);