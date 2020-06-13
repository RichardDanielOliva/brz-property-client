import React, { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
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
    let [validOperation, setValidOperation] = useState(false)

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
                        <option value={''} selected>Choose...</option>
                        {commonsOptions.data.map(({title, value}) =>
                            <option value={value}>{title}</option>
                        )}
                    </select>
                    {validOperation && 
                        <div class="alert alert-danger" role="alert">
                            {validOperation}
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
                        {advertiser.UserContact.phones.map((phones, idx) =>
                            <Fragment>
                                <Input 
                                    id={`advertiser-phones-${idx}`} 
                                    type="phones" 
                                    placeholder='Phone'
                                    value={phones}
                                    onChange={ e => setAdvertiserUserContactAttributte('phones',idx, e.target.value)} />
                            </Fragment> 
                        )}
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
                        {advertiser.UserContact.emails.map((email, idx) => 
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
                <button class="btn btn-primary">
                    <ButtonText>Cancel</ButtonText>
                </button>
                <button 
                    onClick={(event) => {
                        event.preventDefault();
                        let isValidForm = true

                        if(!advertiser.operation && advertiser.operation == ''){
                            setValidOperation("Invalid input")
                            isValidForm = false
                        }else
                            setValidOperation('')  

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