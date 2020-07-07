import React from 'react'

export default function ShopCategory() {
    return (
        <div className="shop__category">
            <div className="shop__category-title">
            <h1>CATEGORIES</h1>
            </div>
            <div className="shop__category-wrap">
            <ul>
                <li className="shop__category-active"><span><i className="fa fa-angle-right" /></span><a href="/s">ALL</a></li>
                <li><span><i className="fa fa-angle-right" /></span><a href="/s">T-SHIRT</a></li>
                <li><span><i className="fa fa-angle-right" /></span><a href="/s">HOODIES</a></li>
                <li><span><i className="fa fa-angle-right" /></span><a href="/s">JACKETS</a></li>
                <li><span><i className="fa fa-angle-right" /></span><a href="/s">PANTS</a></li>
                <li><span><i className="fa fa-angle-right" /></span><a href="/s">SHORTS</a></li>
                <li><span><i className="fa fa-angle-right" /></span><a href="/s">BALO</a></li>
                <li><span><i className="fa fa-angle-right" /></span><a href="/s">WALLET</a></li>
            </ul>
            </div>
            <div className="shop__category-advertise">
            <a href="/s">
                <div className="shop__category-advertise--img">
                <img src="./image/deal.jpg" alt="img" />
                </div>
                <div className="shop__category-advertise--banner">
                <h2>BIG SALE</h2>
                <span>70%</span>
                </div>
                <div className="shop__category-advertise--overlay">
                <span><i className="fa fa-compress" aria-hidden="true" /></span>
                </div>
            </a>
            </div>
            <div className="shop__category-popular">
            <div className="shop__category-title">
                <h1>POPULAR</h1>
            </div>
            <div className="shop__category-popular--wrap">
                <div className="shop__category-popular--wrap-item">
                <div className="popular-img">
                    <img src="./image/t-shirt.jpg" alt="imgg" />
                </div>
                <div className="popular-content">
                    <span className="popular-content__name">The frog in the autom</span>
                    <span className="popular-content__price">$ 400</span>
                </div>
                </div>
                <div className="shop__category-popular--wrap-item">
                <div className="popular-img">
                    <img src="./image/t-shirt.jpg" alt="imgg" />
                </div>
                <div className="popular-content">
                    <span className="popular-content__name">The frog in the autom</span>
                    <span className="popular-content__price">$ 400</span>
                </div>
                </div>
                <div className="shop__category-popular--wrap-item">
                <div className="popular-img">
                    <img src="./image/t-shirt.jpg" alt="imgg" />
                </div>
                <div className="popular-content">
                    <span className="popular-content__name">The frog in the autom</span>
                    <span className="popular-content__price">$ 400</span>
                </div>
                </div>
                <div className="shop__category-popular--wrap-item">
                <div className="popular-img">
                    <img src="./image/t-shirt.jpg" alt="imgg" />
                </div>
                <div className="popular-content">
                    <span className="popular-content__name">The frog in the autom</span>
                    <span className="popular-content__price">$ 400</span>
                </div>
                </div>
                <div className="shop__category-popular--wrap-item">
                <div className="popular-img">
                    <img src="./image/t-shirt.jpg" alt="imgg" />
                </div>
                <div className="popular-content">
                    <span className="popular-content__name">The frog in the autom</span>
                    <span className="popular-content__price">$ 400</span>
                </div>
                </div>
            </div>
            </div>
        </div>
    
    )
}
