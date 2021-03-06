import React, { useEffect } from 'react';
import Slider from "react-slick";
import CustomSlide from '../common/CustomSlide';
import './ImageContainer.css';

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
  const settings = {
    // dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    adaptiveHeight: true,
    className: 'slider'
  };

  useEffect(() => {
    const sliderWidth = document.getElementsByClassName('slick-slider')[0].clientWidth
    const images = document.getElementsByClassName('image')
    for (let i in images) {
      if (images[i].style) {
        images[i].style.width = `${sliderWidth/4}px`
        images[i].style.height = `${sliderWidth/4}px`
        images[i].style.borderRadius = `${sliderWidth/8}px`
      }
    }
  }, [])
  
  return (
    <Slider {...settings}> 
      {SLIDE_IMAGES.map((url, i) => <CustomSlide url={url} index={i} className='image' key={i} />)}
    </Slider>
  )
}


export default ImageContainer