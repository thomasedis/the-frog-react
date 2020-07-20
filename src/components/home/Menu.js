import React from 'react'
import Header from './Header'

import {
    Route,
    Link,
    NavLink
  } from "react-router-dom";

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
export default function Menu() {
    return (
        <>
            <Header/>
            <div className="grid menu-wrapper" id="menu-wrapper">
                <div className="grid wide menu">
                <div className="menu">
                    <div className="menu__main">
                    <ul>
                   
                       
                        <li className="categories">
                        <span className="icon"><i className="fa fa-stream" aria-hidden="true" /></span>
                        <NavLink className="link" to="/shops" activeClassName="active">CATEGORIES</NavLink>
                        <div className="categories__sub">
                            <ul>
                            <li>
                                <NavLink className="categories__sub-link" to="/shops/t-shirt" activeClassName="categories__sub-linkActive">T - Shirt</NavLink>               
                            </li>
                            <li>
                                <NavLink className="categories__sub-link" to="/shops/hoodies" activeClassName="categories__sub-linkActive">Hoodie</NavLink>            
                            </li>
                            <li>
                                <NavLink className="categories__sub-link" to="/shops/jackets" activeClassName="categories__sub-linkActive">Jackets</NavLink>             
                            </li>
                            <li>
                                <NavLink className="categories__sub-link" to="/shops/pants" activeClassName="categories__sub-linkActive">Pants</NavLink>     
                            </li>
                            <li>
                                <NavLink className="categories__sub-link" to="/shops/shorts" activeClassName="categories__sub-linkActive">Shorts</NavLink>
                            </li>
                            <li>
                                <NavLink className="categories__sub-link" to="/shops/wallet" activeClassName="categories__sub-linkActive">Wallet</NavLink>
                            </li>
                            <li>
                                <NavLink className="categories__sub-link" to="/shops/balo" activeClassName="categories__sub-linkActive">Balo</NavLink>   
                            </li>
                            </ul>
                        </div>
                        </li>
                        <MenuLink label='HOME' to='/' activeOnlyWhenExact={true} />
                        <MenuLink label='SHOP' to='/shops' activeOnlyWhenExact={false} />
                        <MenuLink label='BLOG' to='/blogs' activeOnlyWhenExact={true} />
                        <MenuLink label='ABOUTE US' to='/aboute' activeOnlyWhenExact={true} />
                       
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
