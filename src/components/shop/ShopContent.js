import React from 'react'

export default function ShopContent() {
    return (
        <div className="shop-content-wrapper">
            <div className="grid wide">
            <div className="shop">
                <div className="row no-gutters" />
                <div className="l-3 m-3">
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
                </div>
                <div className="l-9 m-9">
                <div className="shop__content">
                    <div className="shop__content-sort">
                    <div className="shop__content-sort--select">
                        <select name="sortValue" onchange="{handleSort}">
                        <option id="shop__content-sort--select-option" value="{0}">Default sorting</option>
                        <option value="{1}">Price: low to high</option>
                        <option value="{2}">Price: high to low</option>
                        </select>
                    </div>
                    <div className="shop__content-sort--icon">
                        <span><i className="fa fa-th-list" aria-hidden="true" /></span>
                    </div>
                    </div>
                    <div className="row no-gutters shop__contentBackground">
                    <div className="l-4 m-4 content-item-padding">
                        <div className="shop__content-item">
                        <div className="shop__content-item--img">
                            <img src="./image/t-shirt.jpg" alt="imgg" />
                            <div className="shop__content-item--img-overlay">
                            <div className="icon-wrapper">
                                <div className="icon-wrapper__add">
                                <span>Add to cart <span className="icon-cart"><i className="fa fa-cart-plus" aria-hidden="true" /></span></span>
                                </div>
                                <div className="icon-wrapper__icon">
                                <span><i className="fa fa-search" aria-hidden="true" /></span>
                                <span><i className="far fa-heart" /></span>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="shop__content-item--sub">
                            <div className="name">
                            <h2>Shorts of hot the frog</h2>
                            </div>
                            <div className="price">
                            <span className="old">$ 199</span>
                            <span className="new">$ 159</span>
                            </div>
                        </div>
                        </div>
                    </div> 
                    </div>
                    <div className="shop__content-pagination">
                    <div className="shop__content-pagination--wrap">
                        <ul>
                        <li><a href="/s"><span><i className="fa fa-chevron-left" aria-hidden="true" /></span></a></li>
                        <li className="shop__content-pagination--active"><a href="/s">1</a></li>
                        <li><a href="/s">2</a></li>
                        <li><a href="/s">3</a></li>
                        <li><a href="/s"><span><i className="fa fa-chevron-right" aria-hidden="true" /></span></a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>    
        
    )
}
