import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
export default function ShopTop(props) {
    const settings= {
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        pauseOnHover: false,
        draggable: true,
        responsive: [
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
              }
            }
          ]
      };
    const category = props.category
    
    return (
        <div className="shop-top">
            <div className="grid">
                <div className="shop-top__title">
                    <h1>{category ? category : 'SHOP'}</h1>
                </div>
                <Slider className="shop-top__slide row" {...settings}>
                    <div className="shop-top__slide-item ">
                        <Link to="/shops/t-shirt">
                            <img src="https://res.cloudinary.com/the-frog/image/upload/v1594302648/shop-top/s_tshirt_fln3if.png" alt="imgg" />
                        </Link>
                    </div>
                    <div className="shop-top__slide-item">
                        <Link to="/shops/hoodies"><img src="https://res.cloudinary.com/the-frog/image/upload/v1594302648/shop-top/s_hoodies_hyrex9.png" alt="imgg" /></Link>
                        
                    </div>
                    <div className="shop-top__slide-item">
                        <Link to="/shops/pants"><img src="https://res.cloudinary.com/the-frog/image/upload/v1594302648/shop-top/s_pants_qticga.png" alt="imgg" /></Link>
                        
                    </div>
                    <div className="shop-top__slide-item">
                        <Link to="/shops/shorts"><img src="https://res.cloudinary.com/the-frog/image/upload/v1594302648/shop-top/s_shorts_xsmhph.png" alt="imgg" /></Link>   
                        
                    </div>
                    <div className="shop-top__slide-item">
                        <Link to="/shops/balo"><img src="https://res.cloudinary.com/the-frog/image/upload/v1594302648/shop-top/s_balo_wp0pzr.png" alt="imgg" /></Link>
                        
                    </div>
                    <div className="shop-top__slide-item">
                        <Link to="/shops/wallet"> <img src="https://res.cloudinary.com/the-frog/image/upload/v1594302648/shop-top/s_wallet_zkranz.png" alt="imgg" /></Link>
                       
                    </div>
                    <div className="shop-top__slide-item">
                        <Link to="/shops/jackets"><img src="https://res.cloudinary.com/the-frog/image/upload/v1594302648/shop-top/s_jackets_ijndvr.png" alt="imgg" /></Link>
                        
                    </div>
                </Slider>
                
            </div>
        </div>
            
    )
}
