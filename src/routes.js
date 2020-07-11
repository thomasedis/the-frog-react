import React from 'react'
import Home from './components/home/Home'
import Shop from './components/shop/Shop'
import SubCategoryShop from './components/shop/SubCategoryShop'
import Carts from './components/carts/Carts'
import DetailProduct from './components/shop/DetailProduct'
import NotFound from './components/notFound/NotFound'
const routes = [
    {
        path: '/',
        exact: true,
        main: ()=> <Home/>
    },
    
    {
        path: '/shops',
        exact: true,
        main: () => <Shop/>
    },
    {
        path: '/shops/:category',
        exact: true,
        main: ()=> <SubCategoryShop/>
    },
    {
        path: '/carts',
        exact: true,
        main: ()=> <Carts/>
    },
    {
        path: '/:id',
        exact: false,
        main: ()=> <DetailProduct/>
    },
    {
        path: '',
        exact: false,
        main: ()=> <NotFound/>
    }
    
]
export default routes