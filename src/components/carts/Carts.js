import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import * as actions from '../../actions/shops/index' 
import {notify} from 'react-notify-toast';
import { Link } from 'react-router-dom';
export default function Carts() {
    
    const carts = useSelector(state => state.carts)
    const dispatch = useDispatch()
    function priceDiscount(item){
        if(item){
            let price = item.price
            if(item.priceDiscount !== 0){
                price = item.price * ((100 - item.percentDiscount)/100)
                }
                return price;
            }   
        }
    const cartItemPriceTotal = (cart) =>{
        return cart.quantity * priceDiscount(cart)
    }
    const totalPriceCart = (carts) =>{
        let total = 0;
        if(carts){
            for(var i = 0; i< carts.length; i++){
                total += carts[i].quantity * priceDiscount(carts[i])
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
                    <span>{priceDiscount(cart)}.000₫</span>
                    </div>
                </td>
                <td>
                    <div className="cartsMain__content-products-quantity">
                        <button><span onClick={()=> updateQuantityCart(cart, cart.quantity - 1)} className="control"><i class="fas fa-chevron-left"></i></span></button>
                        <span>{cart.quantity}</span>
                        <button><span onClick={()=> updateQuantityCart(cart, cart.quantity + 1)} className="control"><i class="fas fa-chevron-right"></i></span></button>
                    </div>
                </td>
                <td className="cartsMain__content-products-total">
                   <div>$ {Intl.NumberFormat('en-VN', { maximumSignificantDigits: 3 }).format(cartItemPriceTotal(cart))}.000₫</div> 
                </td>
                <td className="cartsMain__content-products-remove"><button><span onClick={()=> deleteCart(cart)}><i class="far fa-trash-alt"></i></span></button> </td>
            </tr>
        )
    })
    let cartEmpty = (
        <div>
            <div className="cartEmpty">
                <img src="https://res.cloudinary.com/the-frog/image/upload/v1594302107/the-frog-main/cart-empty_w0epv2.png" alt="imgg"/>
            </div>
        </div>
    )
    let cartBody = (
        <div className="cartsMain">
            <div className="cartsMain__title">
                Your Cart
            </div>
            <div className="cartsMain__content">
                <table>
                <tbody>
                    <tr className="cartsMain__content-top">
                        <th className="cartsMain__content-top--products">Sản phẩm</th>
                        <th className="cartsMain__content-top--quantity">Số lượng</th>
                        <th className="cartsMain__content-top--total">Tổng tiền</th>
                        <th className="cartsMain__content-top--delete">Xóa</th>
                    </tr>
                    {cartItem}
                </tbody></table>
            </div>
            <div className="cartsMain__bottom">
                <div className="cartsMain__bottom-content">
                <span className="cartsMain__bottom-content--total">Tổng tiền: $ {Intl.NumberFormat('en-VN', { maximumSignificantDigits: 3 }).format(totalPriceCart(carts))}.000₫</span>
                <Link to="checkout"><span className="cartsMain__bottom-content--redirect">Thanh toán</span></Link>
                </div>
            </div>
        </div>
            
    )
    return (
        <div className="grid carts-wrapper">
            <div className="grid wide">
                {carts.length ===0 ? cartEmpty : cartBody}  
            </div>
        </div>
    )
}
