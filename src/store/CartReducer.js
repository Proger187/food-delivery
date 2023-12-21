import { createStore } from "redux";


const defaultState = {
    products:[]
}
const CartReducer = (state = defaultState, action) => {
    switch(action.type){
        case "ADD_PRODUCT":{
            return {...state, products:state.products + action.payload}
        }
        default:
            return state
    }
}

const store = createStore(CartReducer)
export default store