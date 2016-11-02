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
            return Object.assign({}, state, {status: fetching});
        case SUCCESS:
            return Object.assign({}, action.wines, {status: fetched})
        case FAILURE:
            return Object.assign({}, state, {status: error});
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

export function getWines() {
    dispatch(process());
    axios.get("/api/wines")
        .then(results => {
            dispatch(success(results.data));            
        })
        .catch(error => {
            dispatch(failure(error))
        }) 
}