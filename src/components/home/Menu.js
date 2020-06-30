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
                        <NavLink className="link" to="/s" activeClassName="active">CATEGORIES</NavLink>
                        <div className="categories__sub">
                            <ul>
                            <li>
                                <NavLink className="categories__sub-link" to="/s" activeClassName="active">T - Shirt</NavLink>               
                            </li>
                            <li>
                                <NavLink className="categories__sub-link" to="/s" activeClassName="active">Hoodie</NavLink>            
                            </li>
                            <li>
                                <NavLink className="categories__sub-link" to="/s" activeClassName="active">Jackets</NavLink>             
                            </li>
                            <li>
                                <NavLink className="categories__sub-link" to="/s" activeClassName="active">Pants</NavLink>     
                            </li>
                            <li>
                                <NavLink className="categories__sub-link" to="/s" activeClassName="active">Shorts</NavLink>
                            </li>
                            <li>
                                <NavLink className="categories__sub-link" to="/s" activeClassName="active">Wallets</NavLink>
                            </li>
                            <li>
                                <NavLink className="categories__sub-link" to="/s" activeClassName="active">Bags</NavLink>   
                            </li>
                            </ul>
                        </div>
                        </li>
                        <MenuLink label='HOME' to='/' activeOnlyWhenExact={true} />
                        <MenuLink label='SHOP' to='/shops' activeOnlyWhenExact={true} />
                        <MenuLink label='BLOG' to='/s' activeOnlyWhenExact={true} />
                        <MenuLink label='ABOUTE US' to='/s' activeOnlyWhenExact={true} />
                       
                    </ul>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
