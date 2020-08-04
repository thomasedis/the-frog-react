import React, {useEffect}from 'react'
import {useParams, useLocation} from 'react-router-dom'
import * as actions from '../../actions/shops/index'
import {useDispatch, useSelector} from 'react-redux'
import  {notify} from 'react-notify-toast';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
export default function DetailProduct() {
  
    const {id} = useParams()
    const {pathname} = useLocation();
    const dispatch = useDispatch()
    const dataDetail = useSelector(state => state.shops)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
   
    useEffect(()=>{ 
        let params
        if(id){
            params ={
                id: id
            }
        }
        dispatch(actions.actFetchShopsRequest(params ? params : ''))
        //eslint-disable-next-line
    },[id])
   
    const handleAddToCart = (item)=>{
        notify.show('Thêm vào giỏ hàng thành công !','success',1500);
        dispatch(actions.actAddToCart(item))
    }
    const images = [
        {
          original: `${dataDetail[0].imageArr[0].img}`,
          thumbnail: `${dataDetail[0].imageArr[0].img}`,
        },
        {
            original: `${dataDetail[0].imageArr[1].img}`,
            thumbnail: `${dataDetail[0].imageArr[1].img}`,
        },
        {
            original: `${dataDetail[0].imageArr[1].img}`,
            thumbnail: `${dataDetail[0].imageArr[1].img}`,
        }
      ];
    function priceDiscount(item){
    if(item){
        let price = item.price
        if(item.priceDiscount !== 0){
            price = item.price * ((100 - item.percentDiscount)/100)
            }
            return price;
        }   
    }
    return (
       <div className="grid detailProduct-wrapper">
            <div className="grid wide">
                <div className="detailProduct">
                    <div className="detailProduct__image">
                        
                      {/* <img src={dataDetail[0].image} alt="imgg"/> */}
                      <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} originalClass="detailProduct__image-img"/>
                     
                    </div>
                    <div className="detailProduct__content">
                        <div className="detailProduct__content-sub">
                            <h1>{dataDetail[0].name}</h1>
                            <span className="category">{dataDetail[0].category[0]}</span>
                            <div className="price">
                                <span className="oldPrice">{dataDetail[0].price}.000₫</span>
                                <span className="newPrice">{priceDiscount(dataDetail[0])}.000₫</span>
                            </div>
                        </div>
                        <div className="detailProduct__content-size">
                            <select name="sortValue"
                                  >
                                <option id="shop__content-sort--select-option" value={0}>S</option>
                                <option value={1}>M</option>
                                <option value={2}>L</option>
                                <option value={3}>XL</option>
                            </select>
                        </div>
                        <div className="detailProduct__content-color">
                            <select name="sortValue"
                                  >
                                <option id="shop__content-sort--select-option" value={0}>White</option>
                                <option value={1}>Black</option>
                            </select>
                        </div>
                        <div onClick={()=>handleAddToCart(dataDetail[0])} className="detailProduct__content-checkout">
                            <span>THÊM VÀO GIỎ HÀNG</span>
                        </div>
                        <div className="detailProduct__content-buynow">
                            <span>MUA NGAY</span>
                        </div>
                        <div className="detailProduct__content-description">
                            <h3>CHI TIẾT SẢN PHẨM</h3>
                            <ul>
                                <li>Sản phẩm 100% cotton</li>
                                <li>Form áo cơ bản </li>
                                <li>Họa tiết được in lên trực tiếp sản phẩm</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}
