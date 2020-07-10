import React from 'react';
import { connect } from 'react-redux';

import PropertyCard from '../property-card/property-card.component';
import ErrorNoProperty from '../../pages/error/error-no-property.component';
import { PropertyCardListContainer, PropertyCardContainer } from './property-card-list.style';

const PropertyCardList = ({properties, errorMessage}) => {
    return (
        <PropertyCardListContainer>
            {errorMessage || properties.properties.length <= 0? 
            <ErrorNoProperty/>
            :
            properties.properties.map(({_id, ...props}) => {
                return (
                    <PropertyCardContainer key={`property-card-${_id}`}>
                        <PropertyCard id={_id} {...props}/>
                    </PropertyCardContainer>
                )})}
        </PropertyCardListContainer>
     )
};

const mapStateToProps = state => ({
    properties: state.properties.data,
    errorMessage: state.properties.errorMessage
});

export default connect(mapStateToProps)(PropertyCardList);

