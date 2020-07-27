import React, { useEffect} from 'react'
// import productApi from '../../api/productsApi'
import { NavLink} from 'react-router-dom'
import {useLocation} from "react-router-dom";

export default function ShopCategory() {
    // const [data, setData] = useState([])
    const {pathname} = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);   
    // useEffect(() => {
    //    const fetchProductList = async () =>{
    //        try {
    //             let params = {
    //                 page: 1,
    //                 limit: 4
    //             }
    //           const response = await productApi.getAll(params);
            
    //           if(response.error === false){
    //                 setData(response.data);
    //           }
   
    //        } catch (error) {
    //            console.log('Failed to fetch products api: ', error)
    //        }
    //    }
    //    fetchProductList()
    // }, [])
    // const popularItem =data.map( (item)=>{
    //     return(
    //         <div className="shop__category-popular--wrap-item" key={item._id}>
    //             <div className="popular-img">
    //                 <img src={item.image} alt="imgg" />
    //             </div>
    //             <div className="popular-content">
    //                 <span className="popular-content__name">{item.name}</span>
    //                 <span className="popular-content__price">$ {item.newPrice}</span>
    //             </div>
    //         </div>
    //     )
    // })
    return (
        <div className="shop__category">
            <div className="shop__category-title">
            <h1>CATEGORIES</h1>
            </div>
            <div className="shop__category-wrap">
                <ul>
                    <li><span><i className="fa fa-angle-right" /></span><NavLink to="/shops" exact activeClassName="shop__category-active">ALL</NavLink></li>
                    <li><span><i className="fa fa-angle-right" /></span><NavLink to="/shops/t-shirt" activeClassName="shop__category-active">T-SHIRT</NavLink></li>
                    <li><span><i className="fa fa-angle-right" /></span><NavLink to="/shops/hoodies" activeClassName="shop__category-active">HOODIES</NavLink></li>
                    <li><span><i className="fa fa-angle-right" /></span><NavLink to="/shops/jackets" activeClassName="shop__category-active">JACKETS</NavLink></li>
                    <li><span><i className="fa fa-angle-right" /></span><NavLink to="/shops/pants" activeClassName="shop__category-active">PANTS</NavLink></li>
                    <li><span><i className="fa fa-angle-right" /></span><NavLink to="/shops/shorts" activeClassName="shop__category-active">SHORTS</NavLink></li>
                    <li><span><i className="fa fa-angle-right" /></span><NavLink to="/shops/balo" activeClassName="shop__category-active">BALO</NavLink></li>
                    <li><span><i className="fa fa-angle-right" /></span><NavLink to="/shops/wallet" activeClassName="shop__category-active">WALLET</NavLink></li>
                </ul>
            </div>
            {/* <div className="shop__category-popular">
                <div className="shop__category-title">
                    <h1>POPULAR</h1>
                </div>
                <div className="shop__category-popular--wrap">
                    {popularItem}
                </div>
            </div> */}
            {/* <div className="shop__category-advertise">
            <a href="/s">
                <div className="shop__category-advertise--img">
                <img src="https://res.cloudinary.com/the-frog/image/upload/v1594302108/the-frog-main/deal_msuall.jpg" alt="img" />
                </div>
                <div className="shop__category-advertise--banner">
                <h2>BIG SALE</h2>
                <span>70%</span>
                </div>
                <div className="shop__category-advertise--overlay">
                <span><i className="fa fa-compress" aria-hidden="true" /></span>
                </div>
            </a>
            </div>
             */}
             <div className="shop__fanPage">
                <div class="fb-page" data-href="https://www.facebook.com/thefrog.streetwear" data-tabs="none" data-width="365" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" allowfullscreen="true"><blockquote cite="https://www.facebook.com/thefrog.streetwear" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/thefrog.streetwear">Fanpage Facebook The Frog</a></blockquote></div>
             </div>
            
        </div>
    
    )
}
