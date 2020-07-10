import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import * as actions from '../../actions/shops/index' 
import {notify} from 'react-notify-toast';
export default function Carts() {
    
    const carts = useSelector(state => state.carts)
    const dispatch = useDispatch()
    const cartItemPriceTotal = (cart) =>{
        return cart.quantity * cart.newPrice
    }
    const totalPriceCart = (carts) =>{
        let total = 0;
        if(carts){
            for(var i = 0; i< carts.length; i++){
                total += carts[i].quantity * carts[i].newPrice
            }
        }
    
        return total
    }
    function updateQuantityCart(cart, quantity){
      
        if(quantity >0){
            dispatch(actions.actUpdateQuantityCart(cart, quantity))
            notify.show('Cập nhập số lượng thành công !','warning',1500);
        }
        else{
            return
        }
    }
    function deleteCart(cart){
        if(confirm('Are you sure delete cart ?')){ //eslint-disable-line
            notify.show('Đã xóa sản phẩm khỏi giỏ hàng !','error',1500);
            dispatch(actions.actDeleteCart(cart))
        }
    
    }
    let cartItem = carts.map((cart)=>{
        return(
            <tr className="cartsMain__content-item" key={cart._id}>
                <td className="cartsMain__content-products">
                    <img src={cart.image} alt="imagee" />
                    <div className="cartsMain__content-products-sub">
                    <h2>{cart.name}</h2>
                    <span>{cart.category[0]}</span>
                    </div>
                </td>
                <td className="cartsMain__content-products-price">${cart.newPrice}</td>
                <td>
                    <div className="cartsMain__content-products-quantity">
                        <button><span onClick={()=> updateQuantityCart(cart, cart.quantity - 1)} className="control">-</span></button>
                        <span>{cart.quantity}</span>
                        <button><span onClick={()=> updateQuantityCart(cart, cart.quantity + 1)} className="control">+</span></button>
                        
                    </div>
                </td>
                <td className="cartsMain__content-products-total">
                    $ {cartItemPriceTotal(cart)}
                </td>
                <td className="cartsMain__content-products-remove"><button><span onClick={()=> deleteCart(cart)}>X</span></button> </td>
            </tr>
        )
    })

    return (
        <div className="grid carts-wrapper">
            <div className="grid wide">
                <div className="cartsMain">
                    <div className="cartsMain__title">
                        Your Cart
                    </div>
                    <div className="cartsMain__content">
                        <table>
                        <tbody>
                            <tr className="cartsMain__content-top">
                                <th>Products</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                            {cartItem}
                        </tbody></table>
                    </div>
                    <div className="cartsMain__bottom">
                        <div className="cartsMain__bottom-content">
                        <span className="cartsMain__bottom-content--total">Subtotal: $ {totalPriceCart(carts)}</span>
                        <span className="cartsMain__bottom-content--redirect">Check Out</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
