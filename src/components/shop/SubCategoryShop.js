
import React from 'react'
import { useParams} from "react-router-dom";
import ShopTop from './ShopTop';
import SubShopContent from './SubShopContent';
import ShopCategory from './ShopCategory';

export default function TshirtShop() {
    let { category } = useParams();
   
    return (
        <div>   
            <ShopTop category= {category}/>
            <div className="shop-content-wrapper">
            <div className="grid wide">
            <div className="shop">
                <div className="row no-gutters" />
                <div className="l-3 m-3">
                    <ShopCategory/>
                </div>
                <div className="l-9 m-9">
                <SubShopContent categories={category}/>
                </div>
            </div>
            </div>
            </div>    
            
        </div>
    )
}
