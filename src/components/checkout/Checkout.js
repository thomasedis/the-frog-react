import React from 'react'
import { Link } from 'react-router-dom'

export default function Checkout() {
    return (
        <div className="grid checkout">
            <div className="grid wide">
                <div className="row">
                    <div className="l-7 m-7 c-12">
                        <div className="checkout__left">
                            <h3>Thông tin giao hàng</h3>
                            <form>
                                <input type="text" placeholder="Họ và tên"/>
                                <input type="text" placeholder="Email"/>
                                <input type="text" placeholder="Số điện thoại"/>
                                <input type="text" placeholder="Địa chủ"/>
                                <input type="text" placeholder="Email"/>
                                <select name="calc_shipping_provinces" required>
                                    <option value>Tỉnh / Thành phố</option>
                                </select>
                                <select name="calc_shipping_district" required>
                                    <option value>Quận / Huyện</option>
                                </select>
                                <input className="billing_address_1" name type="hidden" defaultValue />
                                <input className="billing_address_2" name type="hidden" defaultValue />
                            </form>
                            <div className="checkout__left-method">
                                <h3>Phương thức vận thanh toán</h3>
                                <label className="checkout__left-method-lable" for="checkout__left-methodIDCheckOut">
                                    <input type="radio" id="checkout__left-methodIDCheckOut" checked></input>
                                    <span>Thanh toán khi nhận hàng (COD)</span>
                                </label>
                            </div>
                            <div className="checkout__left-main">
                                <Link to="carts"><span><i class="fas fa-chevron-left"></i></span>Giỏ hàng</Link>
                                <div className="checkout__left-main--done">
                                    <span>Hoàn tất đơn hàng</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="l-5 m-7 c-12">
                        <div className="checkout__right-wrap">
                            <div className="checkout__right">
                                <h3 className="checkout__right-title">Đơn hàng (1 sản phẩm)</h3>
                                <div className="checkout__right-products">
                                    <div className="checkout__right-products-item">
                                        <div className="checkout__right-products-item-sub">
                                            <div className="img">
                                                <img src="https://product.hstatic.net/1000344185/product/2047-tee_bf0c9e52e8e944eaa521dda07017a5c1_master.jpg"  alt="imgg"/>
                                                <div className="quantity">
                                                    <span>1</span>
                                                </div>
                                            </div>
                                            <div className="product">
                                                <h3>CUBE SMOKE TEE - BLACK</h3>
                                                <span>S</span>
                                            </div>
                                        </div>
                                        <div className="checkout__right-products-item-price">
                                            <span>270.000đ</span>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="checkout__right-discount">
                                    <form>
                                        <input type="text" placeholder="Mã giảm giá"></input>
                                        <button>Sử dụng</button>
                                    </form>
                                </div>
                                <div className="checkout__right-temp">
                                    <div className="checkout__right-temp-item">
                                        <span>Tạm tính</span>
                                        <span>450.000đ</span>
                                    </div>
                                    <div className="checkout__right-temp-item">
                                        <span>Phí vận chuyển</span>
                                        <span>___</span>
                                    </div>
                                </div>
                                <div className="checkout__right-temp">
                                    <div className="checkout__right-temp-item">
                                        <span>Tổng cộng</span>
                                        <span className="priceTotal"><span className="vnd">VND</span>450.000đ</span>
                                    </div>
                                </div>
                            </div>   
                        </div>     
                    </div>
                </div>
            </div>
        </div>
    )
}
