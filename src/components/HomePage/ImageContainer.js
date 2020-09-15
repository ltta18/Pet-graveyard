import React from 'react';
import './ImageContainer.css';
import Slider from "react-slick";

const SLIDE_IMAGES = [
  require('../../img/cat1.jpg'),
  require('../../img/cat2.jpg'),
  require('../../img/cat1.jpg'),
  require('../../img/cat3.jpg'),
  require('../../img/cat2.jpg'),
  require('../../img/cat1.jpg'),
  require('../../img/cat3.jpg'),
  require('../../img/cat1.jpg'),
  require('../../img/cat2.jpg')
]

function ImageContainer () {
  const CustomSlide = ({ url, index }) => {
    return (
      <img
        className="image"
        src={url}
        alt={`carousel-${index}`}
      />
    )
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    adaptiveHeight: true,
  };
  
  return (
    <Slider {...settings}> 
      {SLIDE_IMAGES.map((url, i) => <CustomSlide url={url} index={i} />)}
    </Slider>
  )
}


export default ImageContainer