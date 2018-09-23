import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import countdownGif from "../../img/countdown.gif";

const Wrapper = styled.div`
  height: 100%;
  display: ${props => props.action ? 'block' : 'flex'};
  background-color: white;
  &.active { background-color: black; }
  transition: background-color 2s;
  align-items: center;
  justify-content: center;
`;

class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lights: false,
      camera: false,
      action: false,
      images: props.location.state.images
    };
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({ lights: true });
    }, 1);
    setTimeout(() => {
      this.setState({ camera: true });
    }, 2000);
    setTimeout(() => {
      this.setState({ camera: false, action: true });
    }, 4500);
  }

  render() {
    const { lights, camera } = this.state
    var settings = {
      arrows: false,
      infinite: true,
      speed: 750,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: false,
      autoplaySpeed: 5000
    };
    return (
      <Wrapper {...this.state} className={lights ? 'active' : ''}>
        {
          camera ? <img src={countdownGif} /> :
          <Slider {...settings}>
            {this.state.images.map(image => {
              return <img src={image.link} />;
            })}
          </Slider>
        }
      </Wrapper>
    );
  }
}
export default Slideshow;
