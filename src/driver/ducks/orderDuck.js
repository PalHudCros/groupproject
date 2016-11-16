import axios from 'axios';
import {createHeaders, getDriverToken} from "../../utils/jwtHelper"
//Actions
const GET_ORDER_PROCESS = "GET_ORDER_PROCESS";
const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
const GET_ORDER_FAILURE = "GET_ORDER_FAILURE";

//Actions Creator
function getOrderProcess(){
  return { type: GET_ORDER_PROCESS, isFetching:true}
}
function getOrderSuccess(orders){
  return { type: GET_ORDER_SUCCESS, isFetching:false, orders}
}
function getOrderFailure(error){
  return { type: GET_ORDER_FAILURE, isFetching:false, error}
}
//Async Actions
  export function getOrdersByDriver(){
    return dispatch=>{
      dispatch(getOrderProcess())
      axios.get('/api/order/driver', createHeaders(getDriverToken()))
        .then(results => {
          return dispatch(getOrderSuccess(results.data))
        })
        .catch(err => {
          return dispatch(getOrderFailure(err))
        })
    }
  }
//Intial state
const initialState = {
  orderList: []
}

//Reducers
export default function orderReducer(state = initialState, action){
  switch (action.type) {
    case GET_ORDER_PROCESS:
      return Object.assign({}, state, {isFetching:action.isFetching})
    case GET_ORDER_SUCCESS:
      return Object.assign({}, state, {isFetching:action.isFetching, orderList:action.orders})
    case GET_ORDER_FAILURE:
      return Object.assign({}, state, {isFetching:action.isFetching, error:action.error})
    default: 
      return state
  }

}
