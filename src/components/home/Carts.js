import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {notify} from 'react-notify-toast'
import * as actions from '../../actions/shops/index'
export default function Carts() {
    const data = useSelector(state => state.carts)
    const dispatch = useDispatch()
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
    function deleteCart(cart){
        if(confirm('Are you sure delete cart ?')){ //eslint-disable-line
            notify.show('Đã xóa sản phẩm khỏi giỏ hàng !','error',1500);
            dispatch(actions.actDeleteCart(cart))
        }
    
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
                    <div onClick={()=> deleteCart(item)} className="header__cart-sub--wrap--item__detail-right--del">X</div>
                    </div>
                </div>
            </div>   
        )
    })
    
    return (
        <div className="header__cart">
            <div className="header__cart-icon">
               <Link to="/carts"><span><i className="fa fa-shopping-bag" aria-hidden="true" /></span></Link> 
            </div>
            <div className="header__cart-detail">
                <div className="header__cart-detail--quantity"><span>{data.length}</span> ITEMS</div>
                <div className="header__cart-detail--price">$ <span>{totalPrice(data)}</span></div>
            </div>
            <div className="header__cart-sub">
                {
                    data.length !== 0 ? <div className="header__cart-sub--wrap">
                            {cartItem}   
                            </div>
                        : 
                        <div class="header__cart-sub--empty">
                            <img src="https://res.cloudinary.com/the-frog/image/upload/v1594302107/the-frog-main/cart-empty_w0epv2.png" alt="imgg" />
                        </div>
                }
                    <div className="header__cart-sub--bottom">
                        <Link to="/carts">
                            <span>XEM GIO HANG</span>
                        </Link>
                        
                    </div>
            </div>
            
        </div>
                    
    )
}
