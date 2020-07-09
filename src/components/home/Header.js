import React from 'react'
import HeaderTop from './HeaderTop'

export default function Header() {
    return (
        <>
            <HeaderTop/>
            <div className="grid header-wrapper" id="header-wrapper">
                <div className="grid wide">
                <div className="row no-gutters header">  
                    <div className="l-3 m-3">
                    <div className="header__search">
                        <div className="header__search-input">
                        <input type="text" placeholder="Search ..." />
                        <button> <i className="fa fa-search" aria-hidden="true" /></button>
                        </div>
                        <div className="header__search-sub">
                        <div className="header__search-sub--item">
                            <div className="header__search-sub--item-img">
                            <img src="https://res.cloudinary.com/the-frog/image/upload/v1594302108/the-frog-main/bg_header_kl1upv.jpg" alt="imgg" />
                            </div>
                            <div className="header__search-sub--item-content">
                            <span className="name">Ao Hoodie Form Rong</span>
                            <span className="price">$ 10000</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div> 
                    <div className="l-6 m-6"> 
                    <div className="header__logo">
                        <img src="https://res.cloudinary.com/the-frog/image/upload/v1594302107/the-frog-main/frog-with-hat_xhj4er.png" alt="imagee" className="header__logo-imgMain" />
                        <img src="https://res.cloudinary.com/the-frog/image/upload/v1594302108/the-frog-main/logo_border_jhvojf.png" alt="imagee" className="header__logo-imgBorder" />
                    </div>
                    </div>
                    <div className="l-3 m-3 header__cart-right">
                    <div className="header__cart">
                        <div className="header__cart-icon">
                        <span><i className="fa fa-shopping-bag" aria-hidden="true" /></span>
                        </div>
                        <div className="header__cart-detail">
                        <div className="header__cart-detail--quantity"><span>0</span> ITEMS</div>
                        <div className="header__cart-detail--price">$ <span>100</span></div>
                        </div>
                        <div className="header__cart-sub">
                        <div className="header__cart-sub--wrap">
                            <div className="header__cart-sub--wrap--item">
                            <div className="header__cart-sub--wrap--item__img"><img src="./image/bg_header.jpg" alt="imgg" /></div>
                            <div className="header__cart-sub--wrap--item__detail">
                                <div className="header__cart-sub--wrap--item__detail-left">
                                <div className="header__cart-sub--wrap--item__detail-left--name">CROCS SHORT WALLET</div>
                                <div className="header__cart-sub--wrap--item__detail-left--category">Hoodie</div>
                                </div>
                                <div className="header__cart-sub--wrap--item__detail-right">
                                <div className="header__cart-sub--wrap--item__detail-right--price">$ 120</div>
                                <div className="header__cart-sub--wrap--item__detail-right--del">X</div>
                                </div>
                            </div>
                            </div>    
                        </div>
                        {/* <div class="header__cart-sub--empty">
                                    <img src="https://res.cloudinary.com/the-frog/image/upload/v1594302107/the-frog-main/cart-empty_w0epv2.png" alt="imgg">
                                </div> */}
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>  
        </>    
    )
}
