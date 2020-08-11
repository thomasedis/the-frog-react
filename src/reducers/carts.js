import * as types from './../constants/ActionTypes'
import {findIndex} from 'lodash'
// var data = JSON.parse(localStorage.getItem("CARTS"))
var inititalState = [];

const myReducers = (state = inititalState, action)=>{
    switch(action.type){
        case types.ADD_TO_CART:
           
            var index = findIndex(state, (state)=>{
                return state._id === action.item._id
            })
         
            if(index !== -1){
                state[index].quantity += 1
            }
            else{
                state.push(action.item)
            }
            // localStorage.setItem("CARTS", JSON.stringify(state))
            return [...state]
        case types.UPDATE_QUANTITY_TO_CART:
        
            var index2 = findIndex(state, (item)=>{
                return item._id === action.cart._id
            })
            if(index !== -1){
                state[index2].quantity = action.quantity    
            }  
            // localStorage.setItem("CARTS", JSON.stringify(state))
            return [...state]
        case types.REMOVE_TO_CART:
        
            var index3 = findIndex(state, (item) => {
                return item._id === action.cart._id
            })
            if(index3 !== -1) {
                state.splice(index3, 1)
            }  
            // localStorage.setItem("CARTS", JSON.stringify(state))
            return [...state]        
        default: 
            return [...state]
    }
}

export default myReducers