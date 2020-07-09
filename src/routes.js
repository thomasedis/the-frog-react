import React from 'react'
import Home from './components/home/Home'
import Shop from './components/shop/Shop'
import SubCategoryShop from './components/shop/SubCategoryShop'

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
    }
    
]
export default routes