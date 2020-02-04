import React from 'react';
import { connect } from 'react-redux';

import PropertyCard from '../property-card/property-card.component';

import { PropertyCardListContainer, PropertyCardContainer } from './property-card-list.style';

const PropertyCardList = ({properties}) => {
    return (
        <PropertyCardListContainer>
            {properties.properties.map(({_id, ...props}) => {
                return (
                    <PropertyCardContainer key={`property-card-${_id}`}>
                        <PropertyCard id={_id} {...props}/>
                    </PropertyCardContainer>
                )})}
        </PropertyCardListContainer>
     )
};

const mapStateToProps = state => ({
    properties: state.properties.data
});

export default connect(mapStateToProps)(PropertyCardList);

