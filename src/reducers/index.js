import {combineReducers} from 'redux'
import shops from './shops'
import carts from './carts'
import shopsDetail from './shopsDetail'
const myReducers = combineReducers({
    shops,
    carts,
    shopsDetail
})
export default myReducers