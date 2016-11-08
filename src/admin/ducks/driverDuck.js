import axios from 'axios';

// Actions
const GET_DRIVERS_PROCESS = "driver/GET_DRIVERS_PROCESS";
const GET_DRIVERS_SUCCESS = "driver/GET_DRIVERS_SUCCESS";
const GET_DRIVERS_ERROR = "driver/GET_DRIVERS_ERROR";

const CREATE_DRIVER_PROCESS = "driver/CREATE_DRIVER_PROCESS";
const CREATE_DRIVER_SUCCESS = "driver/CREATE_DRIVER_SUCCESS";
const CREATE_DRIVER_ERROR = "driver/CREATE_DRIVER_ERROR";

const DELETE_DRIVER_PROCESS = "driver/DELETE_DRIVER_PROCESS";
const DELETE_DRIVER_SUCCESS = "driver/DELETE_DRIVER_SUCCESS";
const DELETE_DRIVER_ERROR = "driver/DELETE_DRIVER_ERROR";

// Action Creators
function getDriversProcess() {
    return {type: GET_DRIVERS_PROCESS}
}

function getDriversSuccess(driver) {
    return {type: GET_DRIVERS_SUCCESS, driver}
}

function getDriversError(err) {
    retury {type: GET_DRIVER_ERROR, err}
}

function createDriverProcess() {
    return {type: GET_DRIVERS_PROCESS}
}

function createDriverSuccess(driver) {
    return {type: GET_DRIVERS_SUCCESS, driver}
}

function createDriverError(err) {
    retury {type: GET_DRIVER_ERROR, err}
}

function deleteDriverProcess() {
    return {type: GET_DRIVERS_PROCESS}
}

function deleteDriverSuccess(driver) {
    return {type: GET_DRIVERS_SUCCESS, driver}
}

function deleteDriverError(err) {
    retury {type: GET_DRIVER_ERROR, err}
}

// Async Action Creators 
export function getDrivers() {
    return dispatch => {
       dispatch(getDriversProcess());
       return axios.get("/api/admin/drivers")
            .then(results => {
                dispatch(getDriversSuccess(results.data));
            })
            .catch(error => {
                dispatch(getDriversError(error))
            }) 
    }
}

export function createDriver(email, password) {
    return dispatch => {
       dispatch(createDriverProcess());
       return axios.post("/api/admin/drivers", {})
            .then(results => {
                dispatch(createDriverSuccess(results.data));
            })
            .catch(error => {
                dispatch(createDriverError(error))
            }) 
    }
} 

export function deleteDriver(email, password) {
    return dispatch => {
       dispatch(deleteDriverProcess());
       return axios.delete("/api/admin/drivers", {})
            .then(results => {
                dispatch(deleteDriverSuccess(results.data));
            })
            .catch(error => {
                dispatch(deleteDriverError(error))
            }) 
    }
} 

// Initial State
const initialState = {
    drivers: []
}

// Reducer
export default function adminDriver(state = initialState, action) {
    switch ( action.type ) {
        case GET_DRIVERS_PROCESS:
            return Object.assign({}, state, {status: "Fetching Drivers"});
        case GET_DRIVERS_SUCCESS:
            return Object.assign({}, state, {drivers: action.drivers}, {status: "Drivers Received!"})
        case GET_DRIVERS_ERROR:
            return Object.assign({}, state, {status: "Error", error: action.error});
        case CREATE_DRIVER_PROCESS:
            return Object.assign({}, state, {status: "Creating Driver"});
        case CREATE_DRIVER_SUCCESS:
            return Object.assign({}, state, {drivers: action.drivers}, {status: "Driver Created!"})
        case CREATE_DRIVER_ERROR:
            return Object.assign({}, state, {status: "Error", error: action.error});
        case DELETE_DRIVER_PROCESS:
            return Object.assign({}, state, {status: "Deleting Driver"});
        case DELETE_DRIVER_SUCCESS:
            return Object.assign({}, state, {drivers: action.drivers}, {status: "Driver Deleted!"})
        case DELETE_DRIVER_ERROR:
            return Object.assign({}, state, {status: "Error", error: action.error});
        default:
            return state;
    }
}