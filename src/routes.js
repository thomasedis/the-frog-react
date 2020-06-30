import React from 'react'
import Home from './components/home/Home'
import Shop from './components/shop/Shop'

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
    }
    
]
export default routes