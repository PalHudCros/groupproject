import axios from "axios";

const PROCESS = "wines/PROCESS";
const SUCCESS = "wines/SUCCESS";
const FAILURE = "wines/FAILURE";
const SELECT = "wines/SELECT";

const initialState = {
    wines: []
    , selectedWine: {}
}

export default function reducer(state = initialState, action) {
    switch ( action.type ) {
        case PROCESS:
            return Object.assign({}, state, {status: "fetching"});
        case SUCCESS:
            return Object.assign({}, {wines: action.wines, selectedWine: {}}, {status: "fetched"})
        case FAILURE:
            return Object.assign({}, state, {status: "error"});
        case SELECT: 
            return Object.assign({}, state, {selecedWine: action.selectedWine})
        default:
            return state;
    }
}

export function process() {
    return {type: PROCESS};
}

export function success(wineList) {
    return {type: SUCCESS, wines: wineList};
}

export function failure() {
    return {type: FAILURE}
}

export function selectWine(wine) {
    return {type: SELECT, selectedWine: wine}
}

export function getWines() {
    return dispatch => {
        dispatch(process());
        return axios.get("/api/wines")
            .then(results => {
                dispatch(success(results.data.Products.List));            
            })
            .catch(error => {   
                dispatch(failure(error))
            })  
        }
}