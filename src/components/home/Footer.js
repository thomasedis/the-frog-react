import React from 'react'

export default function Footer() {
    return (
        <div className="grid footer">
            <div className="grid wide">
            <div className="footer-wrap">
                <div className="row no-gutter">
                <div className="l-4 m-4">
                    <div className="footer__left">
                    <h1>THE FROG</h1>
                    <span className="description">This a streetwear fashion brand, a local brand in Vietnam. The Frog gradually expanded the market during the development of branches across the country, bringing a very unique culture of The Frog.</span>
                    <div className="footer__left-social">
                        <span><i className="fab fa-facebook-square" /></span>
                        <span><i className="fab fa-instagram" /></span>
                        <span><i className="fab fa-youtube" /></span>
                        <span><i className="fa fa-envelope" aria-hidden="true" /></span>
                    </div>
                    </div>
                </div>
                <div className="l-4 m-4">
                    <div className="footer__center">
                    <h1>CONTACT</h1>
                    <div className="footer__center-address">
                        <span><i className="fas fa-map-marker-alt" /></span> KTX ĐHQG Khu B, TP.HỒ CHÍ MINH
                    </div>
                    <div className="footer__center-phone">
                        <span><i className="fa fa-phone" aria-hidden="true" /></span> 0372924454
                    </div>
                    <div className="footer__center-email">
                        <span><i className="fas fa-envelope" /></span> thefrog.streetwear@gmail.com
                    </div>
                    </div>
                </div>
                <div className="l-4 m-4">
                    <div className="footer__right">
                        <h1>NEWSLETTER</h1>
                        <span>Get instant updates about our new products and special promos!</span>
                        <div className="footer__right-img">
                            <img src="https://res.cloudinary.com/the-frog/image/upload/v1594302108/the-frog-main/letter-footer_sppja2.png" alt="imgg" />
                        </div>
                        <form className="footer__right-form">
                            <input type="email" placeholder="Your email address..." />
                            <button>SUBSCRIBE</button>
                        </form>
                        <div className="footer__right-payment">
                            <img src="https://res.cloudinary.com/the-frog/image/upload/v1594302109/the-frog-main/payment_uvfrex.png" alt="imgg" />
                        </div>
                    </div>
                </div>
                </div>  
            </div>  
            </div>
            <div className="footer-end">
            <div className="footer-end__toTop"><i className="fa fa-chevron-up" aria-hidden="true" /></div>
            <span>Copyright © 2020 The Frog</span>
            </div>
        </div>
    
    )
}
