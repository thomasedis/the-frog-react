import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
export default function Carts() {
    const data = useSelector(state => state.carts)
    
    const totalPrice = (data)=>{
        console.log(data)
        let total = 0
        if(data){
             for(var i=0; i< data.length; i++){
                total += (data[i].newPrice * data[i].quantity)
            }
        }
        return total
    }

    const cartItem = data.map((item)=>{
        return (
            <div className="header__cart-sub--wrap--item" key={item._id}>
                <div className="header__cart-sub--wrap--item__img"><img src={item.image} alt="imgg" /></div>
                <div className="header__cart-sub--wrap--item__detail">
                    <div className="header__cart-sub--wrap--item__detail-left">
                    <div className="header__cart-sub--wrap--item__detail-left--name">{item.name}</div>
                    <div className="header__cart-sub--wrap--item__detail-left--category">{item.category[0]}</div>
                    </div>
                    <div className="header__cart-sub--wrap--item__detail-right">
                    <div className="header__cart-sub--wrap--item__detail-right--price">$ {item.newPrice}</div>
                    <div className="header__cart-sub--wrap--item__detail-right--del">X</div>
                    </div>
                </div>
            </div>   
        )
    })
    
    return (
        <div className="header__cart">
            <div className="header__cart-icon">
                <span><i className="fa fa-shopping-bag" aria-hidden="true" /></span>
            </div>
            <div className="header__cart-detail">
                <div className="header__cart-detail--quantity"><span>{data.length}</span> ITEMS</div>
                <div className="header__cart-detail--price">$ <span>{totalPrice(data)}</span></div>
            </div>
            <div className="header__cart-sub">
                {
                    data ? <div className="header__cart-sub--wrap">
                            {cartItem}   
                            </div>
                        : 
                        <div class="header__cart-sub--empty">
                            <img src="https://res.cloudinary.com/the-frog/image/upload/v1594302107/the-frog-main/cart-empty_w0epv2.png" alt="imgg" />
                        </div>
                }
                    <div className="header__cart-sub--bottom">
                        XEM GIO HANG
                    </div>
            </div>
            
        </div>
                    
    )
}
