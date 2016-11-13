import axios from 'axios'
import {createHeaders} from "../../utils/jwtHelper"
//Intial state
const initialState = {
    orderList: []
}
//Actions
const GET_ORDERS_PROCESS = "orders/GET_ORDERS_PROCESS";
const GET_ORDERS_SUCCESS = "orders/GET_ORDERS_SUCCESS";
const GET_ORDERS_FAILURE = "orders/GET_ORDERS_FAILURE";

const ADD_DRIVER_PROCESS = "orders/ADD_DRIVER_PROCESS";
const ADD_DRIVER_SUCCESS = "orders/ADD_DRIVER_SUCCESS";
const ADD_DRIVER_FAILURE = "orders/ADD_DRIVER_FAILURE";

//Action Creators
function getOrdersProcess() {
    return {type: GET_ORDERS_PROCESS}
}

function getOrdersSuccess(orders) {
    return {type: GET_ORDERS_SUCCESS, orders}
}

function getOrdersFailure(err) {
    return {type: GET_ORDERS_FAILURE, err}
}

function addDriverProcess() {
    return {type: ADD_DRIVER_PROCESS}
}

function addDriverSuccess(driver) {
    return {type: ADD_DRIVER_SUCCESS, driver}
}

function addDriverFailure(err) {
    return {type: ADD_DRIVER_FAILURE, err}
}

//Async Actions

export function getOrders() {
    return dispatch => {
        let token = localStorage.getItem('admin_id_token');
        const headers = createHeaders(token);
        dispatch(getOrdersProcess());
        return axios.get("/api/order", headers)
        .then(results => {
            console.log("RESULTS: ", results.data);
            dispatch(getOrdersSuccess(results.data));            
        })
        // .catch(error => {
        //     console.log(error)
        //     if (error) dispatch(getOrdersFailure(error));
        // })
    }
}

export function addDriverToOrder(orderId, driverId) {
    return dispatch => {
        dispatch(addDriverProcess());
    // Add crap later
    }
}
//Reducer
export default function orderReducer(state=initialState, action) {
    switch(action.type) {
        case GET_ORDERS_PROCESS:
            return Object.assign({}, state, {status: "Fetching Your Mom"} )
        case GET_ORDERS_FAILURE:
            return Object.assign({}, state, {status: "You idiot!"})
        case GET_ORDERS_SUCCESS:
            return Object.assign({}, state, {orderList: action.orders}, {status: "Marvelous"});
        default:
            return state;
    }
} 