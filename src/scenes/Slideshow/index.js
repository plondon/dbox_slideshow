import React, { Component } from "react";
import * as Dropbox from "dropbox";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: props.location.state.images
    };
  }

  render() {
    var settings = {
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: false,
      autoplaySpeed: 5000
    };
    return (
      <Slider {...settings}>
        {this.state.images.map(image => {
          return <img src={image.link} />;
        })}
      </Slider>
    );
  }
}
export default Slideshow;
