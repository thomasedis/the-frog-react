import * as types from './../constants/ActionTypes'
var data = JSON.parse(localStorage.getItem("CARTS"))
var inititalState = data  ? data : []

const myReducers = (state = inititalState, action)=>{
    switch(action.type){
        case types.ADD_TO_CART:
            state.push(action.item)
            localStorage.setItem("CARTS", JSON.stringify(state))
            return [...state]
        default: 
            return [...state]
    }
}

export default myReducers