import React from 'react'

export default function ShopContent() {
    return (
        <div className="shop__content">
            <div className="shop__content-sort">
            <div className="shop__content-sort--select">
                <select name="sortValue">
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
                
    )
}
