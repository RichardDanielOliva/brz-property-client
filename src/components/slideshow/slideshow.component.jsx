class SlideShow extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    render() {
      return (
        <div class="slideshow-container">

            <div class="mySlides fade">
                <div class="numbertext">1 / 3</div>
                <img src="img1.jpg" style="width:100%"/>
                <div class="text">Caption Text</div>
            </div>

            <div class="mySlides fade">
                <div class="numbertext">2 / 3</div>
                <img src="img2.jpg" style="width:100%"/>
                <div class="text">Caption Two</div>
            </div>

            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
        </div>
      );
    }
  }

export default SlideShow;