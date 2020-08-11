import * as types from '../../constants/ActionTypes'

import axiosClient from '../../api/axiosClient'
export const actFetchShopsDetailRequest = (params)=>{
    return(dispatch) =>{
            axiosClient.get("/shops", { params })
            .then(res => {
               
                dispatch(actFetchShopsDetail(res.data))
            })
            .catch(err => console.log(err))
        
    }
}
export const actFetchShopsDetail = (shopsDetail)=>{
    return{
        type: types.FETCH_DATA_DETAIL_SHOP,
        shopsDetail
    }
}