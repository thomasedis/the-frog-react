import {combineReducers} from 'redux'
import shops from './shops'
import carts from './carts'
const myReducers = combineReducers({
    shops,
    carts
})
export default myReducers