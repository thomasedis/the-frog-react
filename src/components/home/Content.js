import React from 'react'
import aos from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
import {Link} from 'react-router-dom'
export default function Content() {
    aos.init({
        // initialise with other settings
        duration : 1000
      });
    return (
        <div className="grid content-wrapper">
            <div className="grid wide">
            <div className="row no-gutters">
                <div className="content">
                <div className="l-4 m-4 col">
                    <div className="content__left">
                    <div className="content__left-sub1" data-aos="fade-right" data-aos-delay="400">
                        <div className="content__left-sub1--img">
                        <img src="./image/shorts.png" alt="imgg" />
                        <div className="content__center-img--sub">
                            <span>SHORTS</span>
                        </div>
                        </div>
                        <div className="content__center-overlay">
                        <div className="content__center-overlay--sub">
                            <Link to="/shops/shorts">
                                <span><i className="fa fa-compress" aria-hidden="true" /></span>
                            </Link>
                             <i>Xem chi tiết</i>
                        </div>
                        </div>
                    </div>
                    <div className="content__left-sub2" data-aos="fade-right" data-aos-delay="400">
                        <div className="content__left-sub2--img">
                        <img src="./image/pants.png" alt="imgg" />
                        <div className="content__center-img--sub">
                            <span>PANTS</span>
                        </div>
                        </div>
                        <div className="content__center-overlay">
                        <div className="content__center-overlay--sub">
                            <Link to="/shops/pants"><span><i className="fa fa-compress" aria-hidden="true" /></span></Link>
                            
                            <i>Xem chi tiết</i>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="l-4 m-4 col">
                    <div className="content__center" data-aos="fade-up">
                    <div className="content__center-img">
                        <img src="https://res.cloudinary.com/the-frog/image/upload/v1596903707/the-frog-main/t-shirt_banner_ohhieq.jpg" alt="imgg" />
                        <div className="content__center-img--sub">
                        <span>T - SHIRT</span>
                        </div>
                    </div>
                    <div className="content__center-overlay">
                        <div className="content__center-overlay--sub">
                        <Link to="/shops/t-shirt"><span><i className="fa fa-compress" aria-hidden="true" /></span></Link>
                        
                        <i>Xem chi tiết</i>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="l-4 m-4 col">
                    <div className="content__right">
                    <div className="content__left-sub1"  data-aos="fade-left" data-aos-delay="400">
                        <div className="content__left-sub1--img">
                        <img src="./image/wallet.png" alt="imgg" />
                        <div className="content__center-img--sub">
                            <span>WALLET</span>
                        </div>
                        </div>
                        <div className="content__center-overlay">
                        <div className="content__center-overlay--sub">
                            <Link to="/shops/wallet"><span><i className="fa fa-compress" aria-hidden="true" /></span></Link>
                            
                            <i>Xem chi tiết</i>
                        </div>
                        </div>
                    </div>
                    <div className="content__left-sub2"  data-aos="fade-left" data-aos-delay="400">
                        <div className="content__left-sub2--img">
                        <img src="./image/balo.png" alt="imgg" />
                        <div className="content__center-img--sub">
                            <span>BALO</span>
                        </div>
                        </div>
                        <div className="content__center-overlay">
                        <div className="content__center-overlay--sub">
                            <Link to="/shops/balo"><span><i className="fa fa-compress" aria-hidden="true" /></span></Link>
                            
                            <i>Xem chi tiết</i>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
      
    )
}
