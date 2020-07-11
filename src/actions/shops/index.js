import * as types from '../../constants/ActionTypes'

import axiosClient from '../../api/axiosClient'
export const actFetchShopsRequest = (params)=>{
    return(dispatch) =>{
            axiosClient.get("/shops", { params })
            .then(res => {
               
                dispatch(actFetchShops(res.data))
            })
            .catch(err => console.log(err))
        
    }
}
export const actFetchShops = (shops)=>{
    return{
        type: types.FETCH_DATA_SHOPS,
        shops
    }
}
export const actAddToCart = (item) =>{
    return{
        type: types.ADD_TO_CART,
        item
    }
}
export const actUpdateQuantityCart = (cart, quantity)=>{
    return{
        type: types.UPDATE_QUANTITY_TO_CART,
        cart,
        quantity
    }
}
export const actDeleteCart = (cart)=>{
    return{
        type: types.REMOVE_TO_CART,
        cart
    }
}
