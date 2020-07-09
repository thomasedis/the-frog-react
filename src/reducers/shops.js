import * as types from './../constants/ActionTypes'
var data = JSON.parse(localStorage.getItem("SHOPS"))
var inititalState = data  ? data : []

const myReducers = (state = inititalState, action)=>{
    switch(action.type){
        case types.FETCH_DATA_SHOPS:
        
            state = action.shops
            console.log(state)
            // localStorage.setItem("SHOPS", JSON.stringify(state))
            return [...state]
        default: 
            return [...state]
    }
}

export default myReducers