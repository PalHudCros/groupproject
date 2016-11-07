import axios from "axios";

// Intial state
const initialState = {
    wines: []
    , selectedWine: {}
}

// Actions
const PROCESS = "wines/PROCESS";
const SUCCESS = "wines/SUCCESS";
const FAILURE = "wines/FAILURE";
const SELECT = "wines/SELECT";

// Action Creators
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

//Reducer
export default function reducer(state = initialState, action) {
    switch ( action.type ) {
        case PROCESS:
            return Object.assign({}, state, {status: "fetching"});
        case SUCCESS:
            return Object.assign({}, {wines: action.wines, selectedWine: {}}, {status: "fetched"})
        case FAILURE:
            return Object.assign({}, state, {status: "error"});
        case SELECT:
            return Object.assign({}, state, {selecedWine: action.selectedWine});
        default:
            return state;
    }
}

// Async Actions
export function getWines(itemId) {
    let filter = "";
    if (itemId) filter += "?Varietal.Id=" + itemId;
    return dispatch => {
        dispatch(process());
        return axios.get("/api/wines/inventory" + filter)
            .then(results => {
                dispatch(success(results.data));
            })
            .catch(error => {
                dispatch(failure(error))
            })
        }
}