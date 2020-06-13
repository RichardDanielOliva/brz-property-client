import React from 'react';

import {
  SlideShowContainer,
  SlideItemContainer,
  PropertyImage,
  NumberText,
  Prev,
  Next
} from './slideshow.styles';

class SlideShowImages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {actualSlide: 0, imgNumber: 5};
    }

    displayImage = (imageIndex) =>{
      let { actualSlide, imgNumber} = this.state;
      let min = actualSlide
      let max = actualSlide + imgNumber
      return imageIndex >= min && imageIndex < max;
    }

    nextImage = (num, totalImages) => {
      let {actualSlide} = this.state

      let nextSlide = actualSlide + num;

      if(nextSlide >= 0 && nextSlide < totalImages)
        this.setState({ actualSlide: nextSlide});
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
                        <PropertyImage src={image} alt={`property-image-${image}`}/>
                    </SlideItemContainer>
            )})}

            <Prev onClick={() => this.nextImage(-1, totalImages)}>&#10094;</Prev>
            <Next onClick={() => this.nextImage(1, totalImages)}>&#10095;</Next>
        </SlideShowContainer>
      );
    }
  }

export default SlideShowImages;