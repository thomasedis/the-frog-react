import React from 'react'

export default function HomeBanner() {
    return (
        <div className="grid banner-wrapper">
            <div className="grid">
            <div className="banner">
                <div className="banner__item">
                <div className="banner__item-img">
                    <img className="animate__animated animate__backInUp" src="./image/nnuu.png" alt="img" />
                </div>
                <div className="banner__item-text">
                    <span className="title animate__animated animate__tada animate__delay-0.5s">THE FROG</span>
                    <span className="sub-title animate__animated animate__bounceInUp animate__delay-1s">A Vietnamese fashion brand</span>
                    <span className="sub-title2 animate__animated animate__bounceInUp animate__delay-1s">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio placeat minus doloremque, corrupti quam aperiam sequi eligendi. Ad, rem reprehenderit.</span>
                </div>
                </div>
                <div className="banner__item">
                <div className="banner__item-img">
                    <img className="animate__animated animate__backInUp" src="./image/nnuu2.png" alt="img" />
                </div>
                <div className="banner__item-text">
                    <span className="title animate__animated animate__tada animate__delay-0.5s">THE FROG</span>
                    <span className="sub-title animate__animated animate__bounceInUp animate__delay-1s">A Vietnamese fashion brand</span>
                    <span className="sub-title2 animate__animated animate__bounceInUp animate__delay-1s">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio placeat minus doloremque, corrupti quam aperiam sequi eligendi. Ad, rem reprehenderit.</span>
                </div>
                </div>
            </div>
            </div>
        </div>
     
    )
}
