import React from 'react'

export default function Deal() {
    return (
        <div className="grid">
            <div className="deal-wrapper">
            <div className="grid wide">
                <div className="deal">
                <div className="deal__title">
                    <h1 className="animate__animated animate__heartBeat">HOT DEAL</h1>
                </div>
                <div className="deal-content">
                    <div className="row no-gutter">
                    <div className="m-6 l-6">
                        <div className="deal__left">
                        <div className="deal__left-img"><img src="./image/deal.jpg" alt="imgg" /></div>
                        <div className="deal__left-title"><span>T - Shirt Vape New Collection</span></div>
                        <div className="deal__left-price">
                            <span className="deal__left-price--old">$ 600</span>
                            <span className="deal__left-price--new">$ 300</span>
                        </div>
                        </div>
                    </div>
                    <div className="m-6 l-6">
                        <div className="deal__right">
                        <div className="deal__right-description">
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, aliquid? Lorem ipsum dolor sit amet.</span>
                        </div>
                        <div className="deal__right-countdown">
                            <div className="countdown" id="countdown" />
                        </div>
                        <div className="deal__right-buynow">
                            <span className="deal__right-buynow--text">BUY NOW <span className="deal__right-buynow--text-icon"> <i className="fas fa-hand-point-right" /></span></span>
                        </div>
                        <div className="deal__right-banner">
                            <img className="animate__animated animate__jello" src="./image/banner-deal.png" alt="imgg" />
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
