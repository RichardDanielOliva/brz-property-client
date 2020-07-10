import React from 'react';
import { connect } from 'react-redux';

import FeatureItem from '../commons/feature-item/feature-item.component';
import SlideShow from '../slideshow/slideshow.component'

import { 
    PropertyCardContainer,
    HeaderContainer,
    BodyContainer,
    FooterContainer,
    FeaturesContainer,
    Type,
    Direction,
    Price,
    Button,
    Icon
} from './property-card.style';


const PropertyCard= ({...property}) => {
    console.log(property.images)
    return (
        <PropertyCardContainer>
            <HeaderContainer>
                {/**<PropertyImage src={PublishImage} alt="item"/>*/}
                <SlideShow images={property.images ? property.images : getProvisionalImages()}/>
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
                    {property.advertiser.userContact.phones[0]}
                </Button>
                <Button className="contact">
                    <Icon className="fas fa-envelope fa-lg"/>
                    Contact                
                </Button>
           </FooterContainer>
        </PropertyCardContainer>
     )
};

const getProvisionalImages = () => {
    return([
        "image1", "image2", "image3"
    ])
}

const mapStateToProps = state => ({
    optionSelected: state.mainSearch.optionSelected,
});

  
export default connect(mapStateToProps, null)(PropertyCard);

