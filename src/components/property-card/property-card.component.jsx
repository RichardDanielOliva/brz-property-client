import React from 'react';
import { connect } from 'react-redux';

import BuyPropertyImage from '../../assets/img/services/buy-property.jpg';
import RentPropertyImage from '../../assets/img/services/rent-property.jpg';
import SharePropertyImage from '../../assets/img/services/share-property.jpg';
import FindHelpImage from '../../assets/img/services/find-help.jpg';
import FindMapImage from '../../assets/img/services/find-map.jpg';
import PublishImage from '../../assets/img/services/publish.jpg';

import { 
    PropertyCardContainer,
    HeaderContainer,
    PropertyImage,
    BodyContainer,
    FooterContainer,
    FeaturesContainer,
    PublishDate,
    Direction,
    Type,
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
                <PublishDate>{property.advertiser.publishDate}</PublishDate>
                <Direction>
                    <Type>{property.type}</Type> 
                    in {property.location.city}
                </Direction>
                <Price>{property.advertiser.price}</Price>
                <FeaturesContainer>
                    
                </FeaturesContainer>
           </BodyContainer>
           <FooterContainer>
                <Button className="call-phone">
                    {property.advertiser.phone}
                    <Icon className="fas fa-angle-double-right fa-lg"/>
                </Button>
                <Button className="contact">
                    "Contact"
                    <Icon className="fas fa-angle-double-right fa-lg"/>
                </Button>
           </FooterContainer>
        </PropertyCardContainer>
     )
};

const mapStateToProps = state => ({
    optionSelected: state.mainSearch.optionSelected,
});

  
export default connect(mapStateToProps, null)(PropertyCard);

