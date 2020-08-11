import React from 'react'
import {Link} from 'react-router-dom'
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
                        <div className="deal__left-img"><img src="https://res.cloudinary.com/the-frog/image/upload/v1596900550/the-frog-main/90a404df092ef570ac3f_qxay9o.jpg" alt="imgg" /></div>
                        <div className="deal__left-title"><span>KONOHA FROG TEE - BLACK</span></div>
                        <div className="deal__left-price">
                            <span className="deal__left-price--old">250.000đ</span>
                            <span className="deal__left-price--new">180.000đ</span>
                        </div>
                        </div>
                    </div>
                    <div className="m-6 l-6">
                        <div className="deal__right">
                        <div className="deal__right-description">
                            <span>This is the first collection, 100% cotton,comfortable and designed in street fashion</span>
                        </div>
                        <div className="deal__right-countdown">
                            <div className="countdown" id="countdown" />
                        </div>
                        <div className="deal__right-buynow">
                            <Link to="/shops" className="deal__right-buynow--text">BUY NOW <span className="deal__right-buynow--text-icon"> <i className="fas fa-hand-point-right" /></span></Link>
                        </div>
                        <div className="deal__right-banner">
                            <img className="animate__animated animate__jello" src="https://res.cloudinary.com/the-frog/image/upload/v1596900397/the-frog-main/Asset_22_xnmags.png" alt="imgg" />
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
