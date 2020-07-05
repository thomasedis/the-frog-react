import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default function Tips() {
    const settings= {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
      };
    return (
        <div className="grid">
            <div className="tips-wrapper">
            <div className="grid wide">
                <div className="tips">
                <div className="tips__title">
                    <h1>TIPS</h1>
                </div>
                <div className="row no-gutter"> 
                    <Slider className="tips__content" {...settings}>
                    <div className="tips__contents-item-padding">
                        <div className="tips__content-item">
                        <div className="tips__content-item--img">
                            <img src="./image/t-shirt.jpg" alt="imgg" />
                        </div>
                        <div className="tips__content-item--detail">
                            <div className="tips__content-item--detail__date">SEPTEMBER 08. 09:15 AM</div>
                            <div className="tips__content-item--detail__title">Mẹo phối đồ T-Shirt với quần Jeans, Shorts</div>
                            <div className="tips__content-item--detail__sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatem dolores atque velit. Rem aut, rerum, quis laborum non labore amet dolorum magni officia qui quaerat veritatis aliquam nostrum natus.</div>
                            <div className="tips__content-item--detail__readMore"><span>Read More</span></div>
                        </div>
                        </div>
                    </div>
                    <div className="tips__contents-item-padding">
                        <div className="tips__content-item">
                        <div className="tips__content-item--img">
                            <img src="./image/t-shirt.jpg" alt="imgg" />
                        </div>
                        <div className="tips__content-item--detail">
                            <div className="tips__content-item--detail__date">SEPTEMBER 08. 09:15 AM</div>
                            <div className="tips__content-item--detail__title">Mẹo phối đồ T-Shirt với quần Jeans, Shorts</div>
                            <div className="tips__content-item--detail__sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatem dolores atque velit. Rem aut, rerum, quis laborum non labore amet dolorum magni officia qui quaerat veritatis aliquam nostrum natus.</div>
                            <div className="tips__content-item--detail__readMore"><span>Read More</span></div>
                        </div>
                        </div>
                    </div>
                    <div className="tips__contents-item-padding">
                        <div className="tips__content-item">
                        <div className="tips__content-item--img">
                            <img src="./image/t-shirt.jpg" alt="imgg" />
                        </div>
                        <div className="tips__content-item--detail">
                            <div className="tips__content-item--detail__date">SEPTEMBER 08. 09:15 AM</div>
                            <div className="tips__content-item--detail__title">Mẹo phối đồ T-Shirt với quần Jeans, Shorts</div>
                            <div className="tips__content-item--detail__sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatem dolores atque velit. Rem aut, rerum, quis laborum non labore amet dolorum magni officia qui quaerat veritatis aliquam nostrum natus.</div>
                            <div className="tips__content-item--detail__readMore"><span>Read More</span></div>
                        </div>
                        </div>
                    </div>
                    <div className="tips__contents-item-padding">
                        <div className="tips__content-item">
                        <div className="tips__content-item--img">
                            <img src="./image/t-shirt.jpg" alt="imgg" />
                        </div>
                        <div className="tips__content-item--detail">
                            <div className="tips__content-item--detail__date">SEPTEMBER 08. 09:15 AM</div>
                            <div className="tips__content-item--detail__title">Mẹo phối đồ T-Shirt với quần Jeans, Shorts</div>
                            <div className="tips__content-item--detail__sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatem dolores atque velit. Rem aut, rerum, quis laborum non labore amet dolorum magni officia qui quaerat veritatis aliquam nostrum natus.</div>
                            <div className="tips__content-item--detail__readMore"><span>Read More</span></div>
                        </div>
                        </div>
                    </div> 
                    <div className="tips__contents-item-padding">
                        <div className="tips__content-item">
                        <div className="tips__content-item--img">
                            <img src="./image/t-shirt.jpg" alt="imgg" />
                        </div>
                        <div className="tips__content-item--detail">
                            <div className="tips__content-item--detail__date">SEPTEMBER 08. 09:15 AM</div>
                            <div className="tips__content-item--detail__title">Mẹo phối đồ T-Shirt với quần Jeans, Shorts</div>
                            <div className="tips__content-item--detail__sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam voluptatem dolores atque velit. Rem aut, rerum, quis laborum non labore amet dolorum magni officia qui quaerat veritatis aliquam nostrum natus.</div>
                            <div className="tips__content-item--detail__readMore"><span>Read More</span></div>
                        </div>
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
