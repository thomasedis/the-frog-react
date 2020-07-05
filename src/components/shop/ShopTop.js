import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function ShopTop() {
    const settings= {
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        pauseOnHover: false,
        draggable: true,
      };
    return (
        <div className="shop-top">
            <div className="grid wide">
            <div className="shop-top__title">
                <h1>SHOP</h1>
            </div>
            <Slider className="shop-top__slide" {...settings}>
                <div className="shop-top__slide-item">
                    <img src="./image/s_tshirt.png" alt="imgg" />
                </div>
                <div className="shop-top__slide-item">
                    <img src="./image/s_hoodies.png" alt="imgg" />
                </div>
                <div className="shop-top__slide-item">
                    <img src="./image/s_pants.png" alt="imgg" />
                </div>
                <div className="shop-top__slide-item">
                    <img src="./image/s_shorts.png" alt="imgg" />
                </div>
                <div className="shop-top__slide-item">
                    <img src="./image/s_balo.png" alt="imgg" />
                </div>
                <div className="shop-top__slide-item">
                    <img src="./image/s_wallet.png" alt="imgg" />
                </div>
                <div className="shop-top__slide-item">
                    <img src="./image/s_jackets.png" alt="imgg" />
                </div>
            </Slider>
            </div>
        </div>
            
    )
}
