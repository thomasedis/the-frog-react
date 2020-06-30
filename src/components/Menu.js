import React from 'react'

export default function Menu() {
    return (
        <div className="grid menu-wrapper" id="menu-wrapper">
            <div className="grid wide menu">
            <div className="menu">
                <div className="menu__main">
                <ul>
                    <li className="categories">
                    <span className="icon"><i className="fa fa-stream" aria-hidden="true" /></span>
                    <a href="/s" className="link">CATEGORIES</a>
                    <div className="categories__sub">
                        <ul>
                        <li>
                            <a className="categories__sub-link" href="/s">T - Shirt</a>
                        </li>
                        <li>
                            <a className="categories__sub-link" href="/s">Hoodies</a>
                        </li>
                        <li>
                            <a className="categories__sub-link" href="/s">Jackets</a>
                        </li>
                        <li>
                            <a className="categories__sub-link" href="/s">Pants</a>
                        </li>
                        <li>
                            <a className="categories__sub-link" href="/s">Shorts</a>
                        </li>
                        <li>
                            <a className="categories__sub-link" href="/s">Wallets</a>
                        </li>
                        <li>
                            <a className="categories__sub-link" href="/s">Bags</a>
                        </li>
                        </ul>
                    </div>
                    </li>
                    <li className="active">
                    <a className="link" href="/s">HOME</a>
                    </li>
                    <li>  
                    <a className="link" href="/s">SHOP</a>
                    </li>
                    <li>
                    <a className="link" href="/s">BLOG</a>
                    </li>
                    <li>
                    <a className="link" href="/s">ABOUTE US</a>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </div>
    )
}
