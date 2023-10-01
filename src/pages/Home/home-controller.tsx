import Aos from 'aos';
import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick';


const HomeController = () => {
    const [activeItem, setActiveItem] = useState(0);
    const sliderRef=useRef<Slider | null>(null);
  
    var settings = {
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      vertical: false,
    };
    var settings2 = {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      vertical: false,
      initialSlide: activeItem,
    };
    const handleStateChange = (newStateValue: number) => {
      // Update the activeItem state when your state changes
      setActiveItem(newStateValue);
      if (sliderRef.current) {
        sliderRef.current.slickGoTo(newStateValue);
      }
    };

    return {activeItem, sliderRef, settings, settings2, handleStateChange};
}

export default HomeController;

