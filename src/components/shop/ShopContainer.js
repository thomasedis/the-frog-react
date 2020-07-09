import React from 'react'
import ShopCategory from './ShopCategory'
import ShopContent from './ShopContent'

export default function ShopContainer() {
   
    return (
        <div className="shop-content-wrapper">
            <div className="grid wide">
            <div className="shop">
                <div className="row no-gutters" />
                <div className="l-3 m-3">
                    <ShopCategory/>
                </div>
                <div className="l-9 m-9">
                    <ShopContent/>
                </div>
            </div>
            </div>
        </div>    
        
    )
}
