import axios from 'axios';
import {createHeaders, isTokenExpired} from "../../utils/jwtHelper";

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

const SHOW_DRIVER = "driver/SHOW_DRIVER";
const UPDATE_DRIVER_POSITIONS = "driver/UPDATE_DRIVER_POSITIONS"


// Action Creators
function getDriversProcess() {
    return {type: GET_DRIVERS_PROCESS}
}

function getDriversSuccess(drivers) {
    return {type: GET_DRIVERS_SUCCESS, drivers}
}

function getDriversError(err) {
    return {type: GET_DRIVERS_ERROR, err}
}

function createDriverProcess() {
    return {type: CREATE_DRIVER_PROCESS}
}

function createDriverSuccess(driver) {
    return {type: CREATE_DRIVER_SUCCESS, driver}
}

function createDriverError(err) {
    return {type: CREATE_DRIVER_ERROR, err}
}

function deleteDriverProcess() {
    return {type: DELETE_DRIVER_PROCESS}
}

function deleteDriverSuccess(driver) {
    return {type: DELETE_DRIVER_SUCCESS, driver}
}

function deleteDriverError(err) {
    return {type: DELETE_DRIVER_ERROR, err}
}

export function showDriverInfo(driverId) {
    return {type: SHOW_DRIVER, driverId}
}

export function updateDriverPositions() {
    return {type: UPDATE_DRIVER_POSITIONS}
}

// Async Action Creators 
export function getDrivers() {
    return dispatch => {
       dispatch(getDriversProcess());
       return axios.get("/api/driver/")
            .then(results => {
                dispatch(getDriversSuccess(results.data));
            })
            .catch(error => {
                dispatch(getDriversError(error))
            }) 
    }
}

export function createDriver(user) {
    return dispatch => {
       dispatch(createDriverProcess());
       const token = localStorage.getItem('admin_id_token')
       const config = createHeaders(token);
       return axios.post("/api/admin/drivers", {user}, config)
            .then(results => {
                dispatch(createDriverSuccess(results.data));
            })
            .catch(error => {
                dispatch(createDriverError(error))
            }) 
    }
} 

export function deleteDriver(driverId) {
    return dispatch => {
       dispatch(deleteDriverProcess());
       return axios.delete("/api/admin/drivers/" + driverId)
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
    driverList: []
}

// Reducer
export default function adminDriver(state = initialState, action) {
    switch ( action.type ) {
        case GET_DRIVERS_PROCESS:
            return Object.assign({}, state, {status: "Fetching Drivers"});
        case GET_DRIVERS_SUCCESS:
            return Object.assign({}, state, {driverList: action.drivers}, {status: "DriversFetched!"})
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
        // Check to see what is coming back
            return Object.assign({}, state, action.driver, {status: "Driver Deleted"})
        case DELETE_DRIVER_ERROR:
            return Object.assign({}, state, {status: "Error", error: action.error});
        case SHOW_DRIVER:
            const showDriverList = state.driverList.map(driver => {
                driver.showInfo = false;
                if (driver._id === action.driverId) driver.showInfo = !driver.showInfo;
                return driver;
            })
            return Object.assign({}, state, {driverList: showDriverList}, {status: "Driver Updated"})
        default:
            return state;
    }
}