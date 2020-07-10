import React from 'react'
import Home from './components/home/Home'
import Shop from './components/shop/Shop'
import SubCategoryShop from './components/shop/SubCategoryShop'
import Carts from './components/carts/Carts'
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
    }
    
]
export default routes