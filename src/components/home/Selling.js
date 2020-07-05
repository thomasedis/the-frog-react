import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function Selling() {
    const settings= {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        draggable: true,
      };
    return (
        <div className="grid">
            <div className="selling-wrapper">
            <div className="grid wide">
                <div className="selling">
                <div className="selling__title">
                    <h1 className="animate__animated animate__heartBeat">Best Selling</h1>
                </div>
                <div className="row no-gutter">
                    <Slider className="selling__slide" {...settings}>
                        <div className="selling__slide-item-padding">
                        <div className="selling__slide-item">
                            <div className="selling__slide-item--img">
                            <img src="./image/selling.jpg" alt="imgg" />
                            <div className="selling__slide-item--img__sub">
                                <div className="selling__slide-item--img__sub-icon animate__animated animate__bounceInLeft"><span><i className="fa fa-cart-plus" aria-hidden="true" /></span></div>
                                <div className="selling__slide-item--img__sub-icon selling__slide-item--img__sub-icon--delay animate__animated animate__bounceInLeft"><span><i className="fa fa-eye" aria-hidden="true" /></span></div>
                            </div>
                            </div>
                            <div className="selling__slide-item--content">
                            <div className="name">V-Hoodie Of Autume</div>
                            <div className="price">
                                <span className="old-price">$75</span>
                                <span className="new-price">$50</span>
                            </div>
                            </div>
                            <div className="selling__slide-item--overlay" />
                        </div>               
                        </div>  
                        <div className="selling__slide-item-padding">
                        <div className="selling__slide-item">
                            <div className="selling__slide-item--img">
                            <img src="./image/selling.jpg" alt="imgg" />
                            <div className="selling__slide-item--img__sub">
                                <div className="selling__slide-item--img__sub-icon animate__animated animate__bounceInLeft"><span><i className="fa fa-cart-plus" aria-hidden="true" /></span></div>
                                <div className="selling__slide-item--img__sub-icon selling__slide-item--img__sub-icon--delay animate__animated animate__bounceInLeft"><span><i className="fa fa-eye" aria-hidden="true" /></span></div>
                            </div>
                            </div>
                            <div className="selling__slide-item--content">
                            <div className="name">V-Hoodie Of Autume</div>
                            <div className="price">
                                <span className="old-price">$75</span>
                                <span className="new-price">$50</span>
                            </div>
                            </div>
                            <div className="selling__slide-item--overlay" />
                        </div>               
                        </div>  
                        <div className="selling__slide-item-padding">
                        <div className="selling__slide-item">
                            <div className="selling__slide-item--img">
                            <img src="./image/selling.jpg" alt="imgg" />
                            <div className="selling__slide-item--img__sub">
                                <div className="selling__slide-item--img__sub-icon animate__animated animate__bounceInLeft"><span><i className="fa fa-cart-plus" aria-hidden="true" /></span></div>
                                <div className="selling__slide-item--img__sub-icon selling__slide-item--img__sub-icon--delay animate__animated animate__bounceInLeft"><span><i className="fa fa-eye" aria-hidden="true" /></span></div>
                            </div>
                            </div>
                            <div className="selling__slide-item--content">
                            <div className="name">V-Hoodie Of Autume</div>
                            <div className="price">
                                <span className="old-price">$75</span>
                                <span className="new-price">$50</span>
                            </div>
                            </div>
                            <div className="selling__slide-item--overlay" />
                        </div>               
                        </div>  
                        <div className="selling__slide-item-padding">
                        <div className="selling__slide-item">
                            <div className="selling__slide-item--img">
                            <img src="./image/selling.jpg" alt="imgg" />
                            <div className="selling__slide-item--img__sub">
                                <div className="selling__slide-item--img__sub-icon animate__animated animate__bounceInLeft"><span><i className="fa fa-cart-plus" aria-hidden="true" /></span></div>
                                <div className="selling__slide-item--img__sub-icon selling__slide-item--img__sub-icon--delay animate__animated animate__bounceInLeft"><span><i className="fa fa-eye" aria-hidden="true" /></span></div>
                            </div>
                            </div>
                            <div className="selling__slide-item--content">
                            <div className="name">V-Hoodie Of Autume</div>
                            <div className="price">
                                <span className="old-price">$75</span>
                                <span className="new-price">$50</span>
                            </div>
                            </div>
                            <div className="selling__slide-item--overlay" />
                        </div>               
                        </div>  
                        <div className="selling__slide-item-padding">
                        <div className="selling__slide-item">
                            <div className="selling__slide-item--img">
                            <img src="./image/selling.jpg" alt="imgg" />
                            <div className="selling__slide-item--img__sub">
                                <div className="selling__slide-item--img__sub-icon animate__animated animate__bounceInLeft"><span><i className="fa fa-cart-plus" aria-hidden="true" /></span></div>
                                <div className="selling__slide-item--img__sub-icon selling__slide-item--img__sub-icon--delay animate__animated animate__bounceInLeft"><span><i className="fa fa-eye" aria-hidden="true" /></span></div>
                            </div>
                            </div>
                            <div className="selling__slide-item--content">
                            <div className="name">V-Hoodie Of Autume</div>
                            <div className="price">
                                <span className="old-price">$75</span>
                                <span className="new-price">$50</span>
                            </div>
                            </div>
                            <div className="selling__slide-item--overlay" />
                        </div>               
                        </div>  
                     </Slider>   
                </div>
                </div>
            </div>
            </div>
        </div>
      
    )
}
