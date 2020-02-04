import React from 'react';

import BuyPropertyImage from '../../assets/img/services/buy-property.jpg';
import RentPropertyImage from '../../assets/img/services/rent-property.jpg';
import SharePropertyImage from '../../assets/img/services/share-property.jpg';

import {
  SlideShowContainer,
  SlideItemContainer,
  PropertyImage,
  NumberText,
  Prev,
  Next
} from './slideshow.styles';

class SlideShow extends React.Component {
    constructor(props) {
      super(props);
      this.state = {actualSlide: 0};
    }

    displayImage = (imageIndex) =>{
      let { actualSlide} = this.state;
      return imageIndex === actualSlide;
    }

    nextImage = (num, totalImages) => {
      let {actualSlide} = this.state

      let nextSlide = actualSlide + num;

      if(nextSlide >= 0 && nextSlide < totalImages)
        this.setState({ actualSlide: nextSlide});
    }

    getImage = (name) => {
      switch (name) {
        case "image1":
            return BuyPropertyImage;
        case "image2":
            return RentPropertyImage;
        case "image3":
            return SharePropertyImage;
        default:
          break;
      }
    }
  
    render() {
      let {images} = this.props;
      let totalImages = images.length;
      return (
        <SlideShowContainer>
            {images.map((image, index) => {
                return (
                    <SlideItemContainer 
                      key={`slide-item-container-${image}`} 
                      display={this.displayImage(index).toString()}>
                          <NumberText>{`${index+1} / ${totalImages}`}</NumberText>
                          <PropertyImage src={this.getImage(image)}/>
                    </SlideItemContainer>
            )})}

            <Prev onClick={() => this.nextImage(-1, totalImages)}>&#10094;</Prev>
            <Next onClick={() => this.nextImage(1, totalImages)}>&#10095;</Next>
        </SlideShowContainer>
      );
    }
  }

export default SlideShow;