import React from 'react';
import { connect } from 'react-redux';

import BuyPropertyImage from '../../assets/img/services/buy-property.jpg';
import RentPropertyImage from '../../assets/img/services/rent-property.jpg';
import SharePropertyImage from '../../assets/img/services/share-property.jpg';
import FindHelpImage from '../../assets/img/services/find-help.jpg';
import FindMapImage from '../../assets/img/services/find-map.jpg';
import PublishImage from '../../assets/img/services/publish.jpg';

import FeatureItem from '../commons/feature-item/feature-item.component';

import { 
    PropertyCardContainer,
    HeaderContainer,
    PropertyImage,
    BodyContainer,
    FooterContainer,
    FeaturesContainer,
    Type,
    Direction,
    TextColor,
    Price,
    Button,
    Icon
} from './property-card.style';


const PropertyCard= ({...property}) => {
    return (
        <PropertyCardContainer>
            <HeaderContainer>
                <PropertyImage src={PublishImage} alt="item"/>
            </HeaderContainer>
           <BodyContainer>
                <Type>{property.features.type}</Type>
                <Direction>{property.location.city}</Direction>
                <Price>{property.advertiser.price} €</Price>
                <FeaturesContainer>
                    <FeatureItem name="rooms" value={property.features.rooms}/>
                    <FeatureItem name="baths" value={property.features.baths}/>
                    <FeatureItem name="area" value={property.features.area.toFixed(2)}/>
                </FeaturesContainer>
           </BodyContainer>
           <FooterContainer>
                <Button className="call-phone">
                    <Icon className="fas fa-phone-alt fa-lg"/>
                    {property.advertiser.UserContact.phones[0]}
                </Button>
                <Button className="contact">
                    <Icon className="fas fa-envelope fa-lg"/>
                    Contact                
                </Button>
           </FooterContainer>
        </PropertyCardContainer>
     )
};

const mapStateToProps = state => ({
    optionSelected: state.mainSearch.optionSelected,
});

  
export default connect(mapStateToProps, null)(PropertyCard);

