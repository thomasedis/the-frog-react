import React from 'react'
import HeaderTop from './HeaderTop'
import Carts from './Carts'
import {Link, Route} from 'react-router-dom'
export default function Header() {
    const MenuLink = ({label, to, activeOnlyWhenExact})=>{
        return(
          <Route 
            path={to} exact={activeOnlyWhenExact} children={ ({match})=>{
              var active = match ? 'active' : ''
              return (
                <li className={active}>
                  <Link className='link' to={to} >{label}</Link>
                </li>
              )
            }}
          />
        )
      }
    return (
        <>
            <HeaderTop/>
          
            <div className="grid header-wrapper" id="header-wrapper">
                <div className="grid wide">
                <div className="row no-gutters header">  
                    <div className="l-3 m-3 c-3">
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
                        <div className="header__menuMobie">
                            <input type="checkbox" className="header__menuMobie-input" id="header__menuMobie--IDinput" hidden />
                            <label htmlFor="header__menuMobie--IDinput" className="header__menuMobie-iconMenu">
                                <i className="fa fa-bars" aria-hidden="true" />
                            </label>  
                            <div className="header__menuMobie-sub">
                                <label htmlFor="header__menuMobie--IDinput" className="header__menuMobie-sub--btnClose">
                                    <i className="fas fa-times" />
                                </label>
                                <ul>
                                    <MenuLink label='HOME' to='/' activeOnlyWhenExact={true} />
                                    <MenuLink label='SHOP' to='/shops' activeOnlyWhenExact={false} />
                                    <MenuLink label='BLOG' to='/blogs' activeOnlyWhenExact={true} />
                                    <MenuLink label='ABOUT US' to='/about' activeOnlyWhenExact={true} />
                                </ul>   
                            </div>
                            <label htmlFor="header__menuMobie--IDinput" className="header__menuMobie-overlay"></label>
                        </div>
                    </div> 
                    <div className="l-6 m-6 c-6"> 
                
                        <div className="header__logo">       
                            {/* <Link to="/"><img src="https://res.cloudinary.com/the-frog/image/upload/v1594302107/the-frog-main/frog-with-hat_xhj4er.png" alt="imagee" className="header__logo-imgMain" /></Link>  */}
                            <Link to="/"><img src="https://res.cloudinary.com/the-frog/image/upload/v1595844420/the-frog-main/3_brr1oa.png" alt="imagee" className="header__logo-imgMain" /></Link> 
                            {/* <img src="https://res.cloudinary.com/the-frog/image/upload/v1594302108/the-frog-main/logo_border_jhvojf.png" alt="imagee" className="header__logo-imgBorder" /> */}
                           
                        </div>
            
                    </div>
                    <div className="l-3 m-3 c-3 header__cart-right">
                        <Carts/>
                    </div>
                </div>
                </div>
            </div>  
         
        </>    
    )
}
