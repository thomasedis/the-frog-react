import * as types from './../constants/ActionTypes'
var data = JSON.parse(localStorage.getItem("SHOPS"))
var inititalState
if(data &&  data !== undefined){
    inititalState = data
}
else
    inititalState = [];
const myReducers = (state = inititalState, action)=>{
    switch(action.type){
        case types.FETCH_DATA_SHOPS:
            state = action.shops   
            localStorage.setItem("SHOPS", JSON.stringify(state))
            return [...state]
        default: 
            return [...state]
    }
}

export default myReducers