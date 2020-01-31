import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import { selectFilterResume} from '../../redux/filter/filter.selectors';

import PropertyCard from '../property-card/property-card.component';

import { PropertyCardListContainer, PropertyCardContainer } from './property-card-list.style';

const PropertyCardList = ({properties}) => {
    const { t } = useTranslation();
    return (
        <PropertyCardListContainer>
            {properties.properties.map(({...props}) => {
                return (
                    <PropertyCardContainer>
                        <PropertyCard {...props}/>
                    </PropertyCardContainer>
                )})}
        </PropertyCardListContainer>
     )
};

const mapStateToProps = state => ({
    properties: state.properties.data
});
  
export default connect(mapStateToProps)(PropertyCardList);

