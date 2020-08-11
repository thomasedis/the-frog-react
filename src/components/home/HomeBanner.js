import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
export default function HomeBanner() {
    
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        draggable: true,
        pauseOnHover: false,
       
        slidesPerRow: 1,
        speed:1000,
      };
    return (
        <div className="grid banner-wrapper">
            <div className="grid">
            <Slider  className="banner" {...settings}>
                <div className="banner__item">
                    <div className="banner__item-img">
                        <img className="animate__animated animate__backInUp" src="https://res.cloudinary.com/the-frog/image/upload/v1596815173/the-frog-main/bg1_ltmrqd.png" alt="img" />
                    </div>
                    <div className="banner__item-text">
                        <span className="title animate__animated animate__tada animate__delay-0.5s">THE FROG</span>
                        <span className="sub-title animate__animated animate__bounceInUp animate__delay-1s">A Vietnamese fashion brand</span>
                        <span className="sub-title2 animate__animated animate__bounceInUp animate__delay-1s">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio placeat minus doloremque, corrupti quam aperiam sequi eligendi. Ad, rem reprehenderit.</span>
                    </div>
                </div>
                <div className="banner__item">
                    <div className="banner__item-img">
                        <img className="animate__animated animate__backInUp" src="https://res.cloudinary.com/the-frog/image/upload/v1596873080/the-frog-main/bg333_go9xtk.png" alt="img" />
                    </div>
                    <div className="banner__item-text">
                        <span className="title animate__animated animate__tada animate__delay-0.5s">THE FROG</span>
                        <span className="sub-title animate__animated animate__bounceInUp animate__delay-1s">A Vietnamese fashion brand</span>
                        <span className="sub-title2 animate__animated animate__bounceInUp animate__delay-1s">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio placeat minus doloremque, corrupti quam aperiam sequi eligendi. Ad, rem reprehenderit.</span>
                    </div>
                </div>
            </Slider>
            </div>
        </div>
     
    )
}
