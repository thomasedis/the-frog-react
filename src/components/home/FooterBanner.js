import React from 'react'

export default function FooterBanner() {
    return (
        <div className="grid">
            <div className="footer-banner-wrapper">
            <div className="grid wide">
                <div className="footer-banner">
                <div className="row no-gutter">
                    <div className="l-4 m-4 c-4">
                    <div className="footer-banner__item">
                        <span className="icon"><i className="fa fa-shipping-fast" aria-hidden="true" /></span>
                        <div className="sub">
                        <span>Free Ship</span>
                        <span>Từ 2 sản phẩm</span>
                        </div>
                    </div>
                    </div>
                    <div className="l-4 m-4 c-4">
                    <div className="footer-banner__item">
                        <span className="icon"><i className="fa fa-credit-card" aria-hidden="true" /></span>
                        <div className="sub">
                        <span>Secure Payment</span>
                        <span>All cards accepted</span>
                        </div>
                    </div>
                    </div>
                    <div className="l-4 m-4 c-4">
                    <div className="footer-banner__item">
                        <span className="icon"><i className="fa fa-headset" aria-hidden="true" /></span>
                        <div className="sub">
                        <span>Help Center</span>
                        <span>24/7 Support System</span>
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
