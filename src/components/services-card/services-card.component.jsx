import React from 'react';
import { connect } from 'react-redux';

import BuyPropertyImage from '../../assets/img/services/buy-property.jpg';
import RentPropertyImage from '../../assets/img/services/rent-property.jpg';
import SharePropertyImage from '../../assets/img/services/share-property.jpg';
import FindHelpImage from '../../assets/img/services/find-help.jpg';
import FindMapImage from '../../assets/img/services/find-map.jpg';
import PublishImage from '../../assets/img/services/publish.jpg';

import { 
    ServiceCardContainer,
    BackgroundImage,
    BodyContainer,
    Title,
    Description,
    Button,
    Icon
} from './services-card.style';

const getImage = (name)=>{
    switch (name) {
        case 'buy-property':
            return BuyPropertyImage;
        case 'rent-property':
            return RentPropertyImage;
        case 'share-property':
            return SharePropertyImage;
        case 'find-map':
            return FindMapImage;
        case 'find-help':
            return FindHelpImage;
        case 'publish':
            return PublishImage;
        default:
            break;
    }
}

const ServiceCard= ({title, description, buttonText, image}) => {
    return (
        <ServiceCardContainer>
           <BackgroundImage src={getImage(image)} alt="item"/>
           <BodyContainer>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <Button>{buttonText}<Icon className="fas fa-angle-double-right"></Icon></Button>
           </BodyContainer>
        </ServiceCardContainer>
     )
};

const mapStateToProps = state => ({
    optionSelected: state.mainSearch.optionSelected,
});

  
export default connect(mapStateToProps, null)(ServiceCard);

