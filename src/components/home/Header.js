import React from 'react'
import HeaderTop from './HeaderTop'
import Carts from './Carts'

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
                        <Carts/>
                    </div>
                </div>
                </div>
            </div>  
        </>    
    )
}
