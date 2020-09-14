import React, {useState, useEffect} from 'react'
import HeaderTop from './HeaderTop'
import Carts from './Carts'
import {useSelector} from 'react-redux'
import {Link, Route, useLocation} from 'react-router-dom'
export default function Header() {
    const {pathname} = useLocation()
    const data = useSelector(state => state.shops)

    const [search, setSearch] = useState("")
    const MenuLink = ({label, to, activeOnlyWhenExact})=>{
        return(
          <Route 
            path={to} exact={activeOnlyWhenExact} children={ ({match})=>{
              var active = match ? 'active' : ''
              return (
                <li className={active}>
                  <Link className='link' to={to} >{label}</Link>
                </li>
              )
            }}
          />
        )
      }
    useEffect(()=>{
        setSearch("")
    },[pathname])
    function onHandleChangeSearch(e){
        setSearch(e.target.value)
    }  
    function onHandleSubmitSearch(e){
        e.preventDefault();
        console.log(search)
    }
    function priceDiscount(item){
        if(item){
            let price = item.price
            if(item.priceDiscount !== 0){
                price = item.price * ((100 - item.percentDiscount)/100)
            }
            return price;
        }   
    }
    let styleSearch
    let dataSearch
    if(data.length !== 0 && search){
        dataSearch = data.filter( item => {
            return item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
        })
        
    }
   
    let searchItem 
    dataSearch ? 
    searchItem = dataSearch.map( item => {
        
        return (
          
            <div className="header__search-sub--item" key={item._id}>
                <div className="header__search-sub--item-img">
                <img src={item.image} alt="imgg" />
                </div>
                <div className="header__search-sub--item-content">
                <Link to={`/${item._id}`} className="name">{item.name}</Link>
                <span className="price">{ Intl.NumberFormat('en-VN', { maximumSignificantDigits: 3 }).format(priceDiscount(item))}₫</span>
                
                </div>
            </div>
        )
    }) :
    searchItem = (
        <div></div>
    )
    dataSearch ? styleSearch = { display: "flex"} : styleSearch = { display: "none"}
    return (
        <>
            <HeaderTop/>
            <div className="grid header-wrapper" id="header-wrapper">
                <div className="grid wide">
                <div className="row no-gutters header">  
                    <div className="l-3 m-3 c-3">
                        <div className="header__search">
                        <div className="header__search-input">
                            <form onSubmit={onHandleSubmitSearch}>
                                <input type="text" placeholder="Search ..." value={search} onChange={onHandleChangeSearch}/>
                                <button type="submit"> <i className="fa fa-search" aria-hidden="true" /></button>
                            </form>
                            
                        </div>
                        <div className="header__search-sub" style= {styleSearch}>
                            {searchItem}
                        </div>  
                    </div>
                        <div className="header__menuMobie">
                            <input type="checkbox" className="header__menuMobie-input" id="header__menuMobie--IDinput" hidden />
                            <label htmlFor="header__menuMobie--IDinput" className="header__menuMobie-iconMenu">
                                <i className="fa fa-bars" aria-hidden="true" />
                            </label>  
                            <div className="header__menuMobie-sub">
                                <label htmlFor="header__menuMobie--IDinput" className="header__menuMobie-sub--btnClose">
                                    <i className="fas fa-times" />
                                </label>
                                <div className="header__menuMobie-sub--logo">
                                    <img src="https://res.cloudinary.com/the-frog/image/upload/v1596286455/the-frog-main/Asset_21_wdwz4i.png" alt="imgg" />
                                </div>
                                <div className="header__menuMobie-sub--search">
                                    <div className="header__search-input customMobie">
                                        <input type="text" placeholder="Search ..." />
                                        <button> <i className="fa fa-search" aria-hidden="true" /></button>
                                    </div>
                                </div>
                                <ul className="header__menuMobie-sub--content">
                                    <MenuLink label='HOME' to='/' activeOnlyWhenExact={true} />
                                    <MenuLink label='SHOP' to='/shops' activeOnlyWhenExact={false} />
                                    <MenuLink label='BLOG' to='/blogs' activeOnlyWhenExact={true} />
                                    <MenuLink label='ABOUT US' to='/about' activeOnlyWhenExact={true} />
                                </ul>   
                            </div>
                            <label htmlFor="header__menuMobie--IDinput" className="header__menuMobie-overlay"></label>
                        </div>
                    </div> 
                    <div className="l-6 m-6 c-6"> 
                
                        <div className="header__logo">       
                            <Link to="/"><img  className="header__logo-imgMain animate__animated animate__flash"  src="https://res.cloudinary.com/the-frog/image/upload/v1595844420/the-frog-main/3_brr1oa.png" alt="imagee"/></Link> 
                            </div>
            
                    </div>
                    <div className="l-3 m-3 c-3 header__cart-right">
                        <Carts/>
                    </div>
                </div>
                </div>
                <div className="header-wrapper-bg"></div>
            </div>  
         
        </>    
    )
}
