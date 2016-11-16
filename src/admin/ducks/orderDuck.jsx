import axios from 'axios'
import {createHeaders} from "../../utils/jwtHelper"
//Intial state
const initialState = {
    orderList: []
    , unfilledOrderList: []
    , filledOrderList: []
}
//Actions
const GET_ORDERS_PROCESS = "orders/GET_ORDERS_PROCESS";
const GET_ORDERS_FAILURE = "orders/GET_ORDERS_FAILURE";
const GET_UNFILLED_ORDERS_SUCCESS = "orders/GET_UNFILLED_ORDERS_SUCCESS";
const GET_FILLED_ORDERS_SUCCESS = "orders/GET_FILLED_ORDERS_SUCCESS";

const ADD_DRIVER_PROCESS = "orders/ADD_DRIVER_PROCESS";
const ADD_DRIVER_SUCCESS = "orders/ADD_DRIVER_SUCCESS";
const ADD_DRIVER_FAILURE = "orders/ADD_DRIVER_FAILURE";

//Action Creators
function getOrdersProcess() {
    return {type: GET_ORDERS_PROCESS}
}

function getOrdersFailure(err) {
    return {type: GET_ORDERS_FAILURE, err}
}

function getUnfilledOrdersSuccess(orders) {
    return {type: GET_UNFILLED_ORDERS_SUCCESS, orders}
}

function getFilledOrdersSuccess(orders) {
    return {type: GET_FILLED_ORDERS_SUCCESS, orders}
}

function addDriverProcess() {
    return {type: ADD_DRIVER_PROCESS}
}

function addDriverSuccess(orders) {
    return {type: ADD_DRIVER_SUCCESS, orders}
}

function addDriverFailure(err) {
    return {type: ADD_DRIVER_FAILURE, err}
}

//Async Actions

export function getUnfilledOrders() {
    return dispatch => {
        let token = localStorage.getItem('admin_id_token');
        const headers = createHeaders(token);
        dispatch(getOrdersProcess());
        return axios.get("/api/orders/unfilled", headers)
        .then(results => {
            dispatch(getUnfilledOrdersSuccess(results.data));            
        })
        // .catch(error => {
        //     console.log(error)
        //     if (error) dispatch(getOrdersFailure(error));
        // })
    }
}

export function getFilledOrders() {
    return dispatch => {
        let token = localStorage.getItem('admin_id_token');
        const headers = createHeaders(token);
        dispatch(getOrdersProcess());
        return axios.get("/api/orders/filled", headers)
        .then(results => {
            dispatch(getFilledOrdersSuccess(results.data));            
        })
        // .catch(error => {
        //     console.log(error)
        //     if (error) dispatch(getOrdersFailure(error));
        // })
    }
}

export function addDriverToOrder(orderInfo) {
    return dispatch => {
        let token = localStorage.getItem('admin_id_token');        
        dispatch(addDriverProcess());
        return axios.put("/api/order/driver", orderInfo, createHeaders(token))
        .then(results => {
            console.log("Order Duck result: ", results)
            dispatch(addDriverSuccess(results.data));
        })
        .catch(err => {
            console.log("Order Duck Error: ", err);
            dispatch(addDriverFailure(err));
        })
    }
}
//Reducer
export default function orderReducer(state=initialState, action) {
    switch(action.type) {
        case GET_ORDERS_PROCESS:
            return Object.assign({}, state, {status: "Fetching Your Mom"} )
        case GET_ORDERS_FAILURE:
            return Object.assign({}, state, {status: "You idiot!"})
        case GET_UNFILLED_ORDERS_SUCCESS:
            return Object.assign({}, state, {unfilledOrderList: action.orders}, {status: "Marvelous"});
        case GET_FILLED_ORDERS_SUCCESS:
            return Object.assign({}, state, {filledOrderList: action.orders}, {status: "Marvelous"});
        case ADD_DRIVER_PROCESS:
            return Object.assign({}, state, {status: "Adding Driver"} )
        case ADD_DRIVER_FAILURE:
            return Object.assign({}, state, {status: "You idiot!"})
        case ADD_DRIVER_SUCCESS:
            return Object.assign({}, state, {unfilledOrderList: action.orders}, {status: "Marvelous"});
        default:
            return state;
    }
} 