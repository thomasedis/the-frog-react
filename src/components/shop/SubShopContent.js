import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import  {notify} from 'react-notify-toast';
import {Link} from 'react-router-dom'
import * as actions from '../../actions/shops/index'


export default function ShopContent(props) {
    const [value, setValue] = useState(0)
    const [page, setPage] = useState(1)
    const [category, setCagegory] = useState("all")
    const [limit] = useState(6)
    const {categories} = props
    const dispatch = useDispatch()
    const data = useSelector(state => state.shops)
    useEffect(() =>{
        if(categories){
            setCagegory(categories)
        }
    },[categories])
    
    useEffect(() => {
        let params = {
            page,
            limit,
            category
        }
       dispatch(actions.actFetchShopsRequest(params))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, limit, category])
    const handleNext = ()=>{
        setPage(page +1)
    }
    const handlePre = ()=>{
        if(page >1)
        setPage(page -1)
    }
    const handleAddToCart= (item) =>{
        notify.show('Thêm vào giỏ hàng thành công !','success',1500);
        dispatch(actions.actAddToCart(item))
    }

    let dataTemp = [...data]
    const handleSort = (e)=>{
        setValue(parseInt(e.target.value))
    }
    if(value ===0){
        dataTemp = [...data]
        
    }
        
    if(value === 1){
        dataTemp = [...data]
        dataTemp = dataTemp.sort((a,b)=>{
            return a.newPrice - b.newPrice
        })
    }
    if(value === 2){
        dataTemp = [...data]
        dataTemp = dataTemp.sort((a,b)=>{
            return b.newPrice - a.newPrice
        })   
    } 
   
    let shopItem
    data.length !== 0 ? 
    shopItem = dataTemp.map((item)=>{
        return(
            <div className="l-4 m-4 content-item-padding" key={item._id}>
                <div className="shop__content-item">
                <div className="shop__content-item--img">
                    <img src={item.image} alt="imgg" />
                    <div className="shop__content-item--img-overlay">
                    <div className="icon-wrapper">
                        <div className="icon-wrapper__add">
                        <span onClick={()=> handleAddToCart(item)}>Add to cart <span className="icon-cart"><i className="fa fa-cart-plus" aria-hidden="true" /></span></span>
                        </div>
                        <div className="icon-wrapper__icon">
                        <Link to={`/${item._id}`}><span><i className="fa fa-search" aria-hidden="true" /></span></Link>
                        <span><i className="far fa-heart" /></span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="shop__content-item--sub">
                    <div className="name">
                    <Link to={`/${item._id}`}><h2>{item.name}</h2></Link>
                    </div>
                    <div className="price">
                    <span className="old">$ {item.oldPrice}</span>
                    <span className="new">$ {item.newPrice}</span>
                    </div>
                </div>
                </div>
            </div> 
        )
    })
    :
    shopItem = (
        <>
        <div className="loading-shop">
            <img src="https://res.cloudinary.com/the-frog/image/upload/v1594452127/shop-top/13f94b50bd090b8f88811959cdb96cfb_z1zds1.gif" alt="imgg"></img>
        </div>
        </>
    )
    return (
        <div className="shop__content">
            <div className="shop__content-sort">
                <div className="shop__content-sort--select">
                <select name="sortValue"
                        onChange={handleSort} >
                    <option id="shop__content-sort--select-option" value={0}>Default sorting</option>
                    <option value={1}>Price: low to high</option>
                    <option value={2}>Price: high to low</option>
                </select>
                </div>
                <div className="shop__content-sort--icon">
                    <span><i className="fa fa-th-list" aria-hidden="true" /></span>
            </div>
            </div>
            <div className="row no-gutters shop__contentBackground">
                {shopItem}
            </div>
            <div className="shop__content-pagination">
            <div className="shop__content-pagination--wrap">
                <ul>
                <li onClick={handlePre}><span><i className="fa fa-chevron-left" aria-hidden="true" /></span></li>
                <li className="shop__content-pagination--active"><a href="/s">1</a></li>
                <li><a href="/s">2</a></li>
                <li><a href="/s">3</a></li>
                <li onClick={handleNext}><span><i className="fa fa-chevron-right" aria-hidden="true" /></span></li>
                </ul>
            </div>
            </div>
        </div>
                
    )
}
